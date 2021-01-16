package main

import (
	"context"
	"fmt"
	"math/rand"
	"strconv"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"github.com/FotiadisM/eam/server/pkg/calendar"
	"github.com/FotiadisM/eam/server/pkg/user"
	"github.com/google/uuid"
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

func (r repository) PopulateUsers(ctx context.Context) (err error) {

	uuid, err := uuid.NewRandom()
	if err != nil {
		return fmt.Errorf("uuid.NewRandom(): %w", err)
	}

	u := user.User{
		ID:          uuid.String(),
		Username:    "mike",
		Email:       "mike@mail.com",
		AFM:         "1234534123",
		FirstName:   "Μιχαήλ",
		LastName:    "Φωτιάδης",
		Born:        "25/10/99",
		Tel:         "6986319735",
		FathersName: "Αντώνιος",
		MothersName: "Αμαλία",
		Address:     "Δρόμος 3986 Νέα Ιωνία Αθήνα, Αττική",
		Zipcode:     "62343",
	}

	db := r.client.Database("eam")

	ctx1, cancel1 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel1()

	_, err = db.Collection("users").InsertOne(ctx1, u)
	if err != nil {
		return fmt.Errorf("InserOne(): %w", err)
	}

	l := loginInfo{
		UserID:   u.ID,
		Username: u.Username,
		Password: "pass",
	}

	ctx2, cancel2 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel2()

	_, err = db.Collection("login").InsertOne(ctx2, l)
	if err != nil {
		return fmt.Errorf("InserOne(): %w", err)
	}

	return
}

func (r repository) PopulateOrganizations(ctx context.Context) (err error) {
	return
}

func (r repository) PopulateBookingDates(ctx context.Context) error {

	months := []calendar.Month{}

	// February
	feb := []int{1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26}
	days := []calendar.Day{}
	for _, d := range feb {
		hours := []calendar.Hour{}
		for i := 0; i < 9; i++ {
			uuid, err := uuid.NewRandom()
			if err != nil {
				return err
			}

			active := true
			random := rand.Intn(3)
			if random == 0 {
				active = false
			}

			hour := calendar.Hour{
				ID:     uuid.String(),
				Hour:   strconv.Itoa(9 + i),
				Minute: "00",
				Active: active,
			}

			hours = append(hours, hour)
		}
		days = append(days, calendar.Day{
			Date:  strconv.Itoa(d),
			Hours: hours,
		})
	}
	months = append(months, calendar.Month{Name: time.February.String(), Days: days})

	// March
	march := []int{1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 29, 30, 31}
	days = []calendar.Day{}
	for _, d := range march {
		hours := []calendar.Hour{}
		for i := 0; i < 9; i++ {
			uuid, err := uuid.NewRandom()
			if err != nil {
				return err
			}

			active := true
			random := rand.Intn(3)
			if random == 0 {
				active = false
			}

			hour := calendar.Hour{
				ID:     uuid.String(),
				Hour:   strconv.Itoa(9 + i),
				Minute: "00",
				Active: active,
			}

			hours = append(hours, hour)
		}
		days = append(days, calendar.Day{
			Date:  strconv.Itoa(d),
			Hours: hours,
		})
	}
	months = append(months, calendar.Month{Name: time.March.String(), Days: days})

	// April
	april := []int{1, 2, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30}
	days = []calendar.Day{}
	for _, d := range april {
		hours := []calendar.Hour{}
		for i := 0; i < 9; i++ {
			uuid, err := uuid.NewRandom()
			if err != nil {
				return err
			}

			active := true
			random := rand.Intn(3)
			if random == 0 {
				active = false
			}

			hour := calendar.Hour{
				ID:     uuid.String(),
				Hour:   strconv.Itoa(9 + i),
				Minute: "00",
				Active: active,
			}

			hours = append(hours, hour)
		}
		days = append(days, calendar.Day{
			Date:  strconv.Itoa(d),
			Hours: hours,
		})
	}
	months = append(months, calendar.Month{Name: time.April.String(), Days: days})

	db := r.client.Database("eam")

	for _, m := range months {
		ctx, cancel := context.WithTimeout(ctx, 2*time.Second)
		defer cancel()

		_, err := db.Collection("dates").InsertOne(ctx, m)
		if err != nil {
			return fmt.Errorf("InsertOne(): %w", err)
		}
	}

	return nil
}
