package main

import (
	"context"
	"errors"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"github.com/FotiadisM/eam/server/pkg/calendar"
	"github.com/FotiadisM/eam/server/pkg/organization"
	"github.com/FotiadisM/eam/server/pkg/user"
)

const (
	// ErrNotFound ..
	ErrNotFound = "Not found"

	// ErrNotAuth ..
	ErrNotAuth = "Not authorized"

	// ErrInternal ..
	ErrInternal = "Internal Error"
)

type repository struct {
	client *mongo.Client
}

// newRepository ..
func newRepository(uri string) (*repository, error) {
	client, err := mongo.NewClient(options.Client().ApplyURI(uri))
	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		return nil, err
	}

	// err = client.Ping(ctx, nil)
	// if err != nil {
	// 	return nil, err
	// }

	return &repository{client: client}, nil
}

// USER
type loginInfo struct {
	UserID   string `bson:"userId"`
	Username string `bson:"username"`
	Password string `bson:"password"`
}

func (r repository) GetLogin(ctx context.Context, username, password string) (id string, err error) {

	db := r.client.Database("eam")
	ctx, cancel := context.WithTimeout(ctx, 4*time.Second)
	defer cancel()

	l := loginInfo{}

	err = db.Collection("login").FindOne(ctx, bson.D{primitive.E{Key: "username", Value: username}}).Decode(&l)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return "", errors.New(ErrNotFound)
		}
		return "", errors.New(ErrInternal)
	}

	if l.Password != password {
		return "", errors.New(ErrNotAuth)
	}

	return l.UserID, nil
}

func (r repository) GetUser(ctx context.Context, id string) (u *user.User, err error) {

	db := r.client.Database("eam")
	ctx, cancel := context.WithTimeout(ctx, 4*time.Second)
	defer cancel()

	u = &user.User{}

	err = db.Collection("users").FindOne(ctx, bson.D{primitive.E{Key: "_id", Value: id}}).Decode(u)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.New(ErrNotFound)
		}
		return nil, errors.New(ErrInternal)
	}

	return
}

func (r repository) UpdateUser(ctx context.Context, u *user.User) (err error) {

	db := r.client.Database("eam")
	ctx, cancel := context.WithTimeout(ctx, 4*time.Second)
	defer cancel()

	_, err = db.Collection("users").ReplaceOne(ctx, bson.D{primitive.E{Key: "_id", Value: u.ID}}, u)
	if err != nil {
		return err
	}

	return
}

// ORGANIZATION

func (r repository) GetOrganization(ctx context.Context, id string) (o *organization.Organization, err error) {

	db := r.client.Database("eam")

	ctx, cancel := context.WithTimeout(ctx, 4*time.Second)
	defer cancel()

	o = &organization.Organization{}

	err = db.Collection("organizations").FindOne(ctx, bson.D{bson.E{Key: "_id", Value: id}}).Decode(o)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.New(ErrNotFound)
		}
		return nil, fmt.Errorf("db.Collection('organizations').FindOne() %w", err)
	}

	return
}

func (r repository) GetOrganizationEmployees(ctx context.Context, id string) (es []*organization.Employ, err error) {
	db := r.client.Database("eam")

	ctx1, cancel1 := context.WithTimeout(ctx, 4*time.Second)
	defer cancel1()

	cursor, err := db.Collection("employees").Find(ctx1, bson.D{bson.E{Key: "orgId", Value: id}})
	if err != nil {
		return nil, fmt.Errorf("Find(): %w", err)
	}

	ctx2, cancel2 := context.WithTimeout(ctx, 4*time.Second)
	defer cancel2()

	es = []*organization.Employ{}
	err = cursor.All(ctx2, &es)
	if err != nil {
		return nil, fmt.Errorf("curson.All(): %w", err)
	}

	return
}

func (r repository) GetEmployByUserID(ctx context.Context, id string) (e *organization.Employ, err error) {
	db := r.client.Database("eam")

	ctx, cancel := context.WithTimeout(ctx, 4*time.Second)
	defer cancel()

	e = &organization.Employ{}
	err = db.Collection("employees").FindOne(ctx, bson.D{bson.E{Key: "userId", Value: id}}).Decode(e)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.New(ErrNotFound)
		}
		return nil, fmt.Errorf("db.Collection('employees').FindOne() %w", err)
	}
	return
}

func (r repository) UpdateEmployStatus(ctx context.Context, fName string, lName string, afm string, amka string, status organization.StatusProps) (err error) {

	db := r.client.Database("eam")

	ctx, cancel := context.WithTimeout(ctx, 4*time.Second)
	defer cancel()

	u := &user.User{}
	filters := bson.D{
		primitive.E{Key: "firstName", Value: fName},
		primitive.E{Key: "lastName", Value: lName},
		primitive.E{Key: "AFM", Value: afm},
		primitive.E{Key: "AMKA", Value: amka},
	}
	if err = db.Collection("users").FindOne(ctx, filters).Decode(u); err != nil {
		if err == mongo.ErrNoDocuments {
			return errors.New(ErrNotFound)
		}
	}

	e := &organization.Employ{}
	update := bson.D{primitive.E{Key: "$set", Value: bson.D{primitive.E{Key: "status", Value: status}}}}
	if err = db.Collection("employees").FindOneAndUpdate(ctx, bson.D{primitive.E{Key: "userId", Value: u.ID}}, update).Decode(e); err != nil {
		return err
	}

	return
}

func (r repository) CancelEmployStatus(ctx context.Context, id string) (err error) {
	db := r.client.Database("eam")

	ctx, cancel := context.WithTimeout(ctx, 4*time.Second)
	defer cancel()

	e := &organization.Employ{}
	st := organization.StatusProps{Status: organization.Normal, From: "", To: ""}
	update := bson.D{primitive.E{Key: "$set", Value: bson.D{primitive.E{Key: "status", Value: st}}}}
	if err = db.Collection("employees").FindOneAndUpdate(ctx, bson.D{primitive.E{Key: "_id", Value: id}}, update).Decode(e); err != nil {
		return err
	}

	return
}

// CALENDAR
func (r repository) GetAvailableDates(ctx context.Context) (months []calendar.Month, err error) {

	db := r.client.Database("eam")

	// ctx1, cancel1 := context.WithTimeout(ctx, 4*time.Second)
	// defer cancel1()

	cursor, err := db.Collection("dates").Find(context.TODO(), bson.D{})
	if err != nil {
		return nil, fmt.Errorf("Find(): %w", err)
	}

	ctx2, cancel2 := context.WithTimeout(ctx, 4*time.Second)
	defer cancel2()

	err = cursor.All(ctx2, &months)
	if err != nil {
		return nil, fmt.Errorf("curson.All(): %w", err)
	}

	return
}

func (r repository) BookDate(ctx context.Context, id string) (err error) {
	return
}
func (r repository) GetUserDates(ctx context.Context, id string) (nt []calendar.Notebook, err error) {
	return
}
