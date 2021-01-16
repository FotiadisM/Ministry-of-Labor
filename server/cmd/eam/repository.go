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

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		return nil, err
	}

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
	ctx, cancel := context.WithTimeout(ctx, 2*time.Second)
	defer cancel()

	l := loginInfo{}

	err = db.Collection("login").FindOne(ctx, bson.D{primitive.E{Key: "username", Value: username}}).Decode(&l)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return "", errors.New(ErrNotFound)
		}
	}

	if l.Password != password {
		return "", errors.New(ErrNotAuth)
	}

	return l.UserID, nil
}

func (r repository) GetUser(ctx context.Context, id string) (u *user.User, err error) {

	db := r.client.Database("eam")
	ctx, cancel := context.WithTimeout(ctx, 2*time.Second)
	defer cancel()

	u = &user.User{}

	err = db.Collection("users").FindOne(ctx, bson.D{primitive.E{Key: "_id", Value: id}}).Decode(u)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.New(ErrNotFound)
		}
	}

	return
}

// ORGANIZATION

func (r repository) GetOrganization(ctx context.Context, id string) (o *organization.Organization, err error) {
	return
}

// CALENDAR
func (r repository) GetAvailableDates(ctx context.Context) (months []calendar.Month, err error) {

	db := r.client.Database("eam")

	ctx1, cancel1 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel1()

	cursor, err := db.Collection("dates").Find(ctx1, bson.D{})
	if err != nil {
		return nil, fmt.Errorf("Find(): %w", err)
	}

	ctx2, cancel2 := context.WithTimeout(ctx, 2*time.Second)
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
