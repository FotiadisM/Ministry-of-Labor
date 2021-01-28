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
	"github.com/FotiadisM/eam/server/pkg/organization"
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

	userUUID, err := uuid.NewRandom()
	if err != nil {
		return fmt.Errorf("uuid.NewRandom(): %w", err)
	}

	orgUUID, err := uuid.NewRandom()
	if err != nil {
		return fmt.Errorf("uuid.NewRandom(): %w", err)
	}

	employUUID, err := uuid.NewRandom()
	if err != nil {
		return fmt.Errorf("uuid.NewRandom(): %w", err)
	}

	u := user.User{
		ID:   userUUID.String(),
		AMKA: "251099678",
		EmploymentInfo: &user.EmploymentInfo{
			EmployID:       "1234",
			OrganizationID: orgUUID.String(),
			IsOwner:        true,
		},
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

	employ := organization.Employ{
		ID:          employUUID.String(),
		UserID:      userUUID.String(),
		OrgID:       orgUUID.String(),
		Joined:      "11/07/2020",
		SalaryMonth: 3000,
		Status: &organization.StatusProps{
			Status: organization.Normal,
			From:   "",
			To:     "",
		},
		TimeoffsYear:  24,
		TimeoffsTaken: 4,
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

	ctx10, cancel10 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel10()

	_, err = db.Collection("employees").InsertOne(ctx10, employ)
	if err != nil {
		return fmt.Errorf("InserOne(): %w", err)
	}

	// TATAS
	tatasUUID, err := uuid.NewRandom()
	if err != nil {
		return err
	}

	tatasEmployUUID, err := uuid.NewRandom()
	if err != nil {
		return err
	}

	tatas := user.User{
		ID:   tatasUUID.String(),
		AMKA: "2307995782",
		EmploymentInfo: &user.EmploymentInfo{
			EmployID:       tatasEmployUUID.String(),
			OrganizationID: orgUUID.String(),
			IsOwner:        false,
		},
		Username:    "tatas",
		Email:       "tatas@mail.com",
		AFM:         "1234534123",
		FirstName:   "Μιχαήλ",
		LastName:    "Τατάς",
		Born:        "13/7/99",
		Tel:         "6986319735",
		FathersName: "Βασίλης",
		MothersName: "Ελένη",
		Address:     "Ο καλύτερος Δρόμος 7 Περιστέρι Αθήνα, Αττική",
		Zipcode:     "62534",
	}

	tatasEmploy := organization.Employ{
		ID:            tatasEmployUUID.String(),
		UserID:        tatasUUID.String(),
		OrgID:         orgUUID.String(),
		SalaryMonth:   2200,
		TimeoffsYear:  22,
		TimeoffsTaken: 2,
		Joined:        "25/11/2020",
		Status: &organization.StatusProps{
			Status: organization.Remote,
			From:   "20/01/2021",
			To:     "27/01/2021",
		},
	}

	ctx3, cancel3 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel3()

	_, err = db.Collection("users").InsertOne(ctx3, tatas)
	if err != nil {
		return fmt.Errorf("InserOne(): %w", err)
	}

	l = loginInfo{
		UserID:   tatas.ID,
		Username: tatas.Username,
		Password: "pass",
	}

	ctx4, cancel4 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel4()

	_, err = db.Collection("login").InsertOne(ctx4, l)
	if err != nil {
		return fmt.Errorf("InserOne(): %w", err)
	}

	ctx5, cancel5 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel5()

	_, err = db.Collection("employees").InsertOne(ctx5, tatasEmploy)
	if err != nil {
		return fmt.Errorf("InserOne(): %w", err)
	}

	// TATAS END

	// FLWROS START
	flwrosUUID, err := uuid.NewRandom()
	if err != nil {
		return err
	}

	flwrosEmployUUID, err := uuid.NewRandom()
	if err != nil {
		return err
	}

	flwros := user.User{
		ID:   flwrosUUID.String(),
		AMKA: "120699901",
		EmploymentInfo: &user.EmploymentInfo{
			EmployID:       flwrosEmployUUID.String(),
			OrganizationID: orgUUID.String(),
			IsOwner:        false,
		},
		Username:    "flwros",
		Email:       "flwros@mail.com",
		AFM:         "1234534123",
		FirstName:   "Γεώργιος",
		LastName:    "Φλώρος",
		Born:        "13/7/99",
		Tel:         "6986319735",
		FathersName: "Κώσταντίνος",
		MothersName: "Ελένη",
		Address:     "Τυχαίος Δρόμος 7 Γλυφάδα Αθήνα, Αττική",
		Zipcode:     "23465",
	}

	flwrosEmploy := organization.Employ{
		ID:            flwrosEmployUUID.String(),
		UserID:        flwrosUUID.String(),
		OrgID:         orgUUID.String(),
		SalaryMonth:   1600,
		TimeoffsYear:  22,
		TimeoffsTaken: 0,
		Joined:        "23/12/2020",
		Status: &organization.StatusProps{
			Status: organization.Suspension,
			From:   "13/12/2020",
			To:     "12/01/2021",
		},
	}

	ctx6, cancel6 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel6()

	_, err = db.Collection("users").InsertOne(ctx6, flwros)
	if err != nil {
		return fmt.Errorf("InserOne(): %w", err)
	}

	l = loginInfo{
		UserID:   flwros.ID,
		Username: flwros.Username,
		Password: "pass",
	}

	ctx7, cancel7 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel7()

	_, err = db.Collection("login").InsertOne(ctx7, l)
	if err != nil {
		return fmt.Errorf("InserOne(): %w", err)
	}

	ctx8, cancel8 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel8()

	_, err = db.Collection("employees").InsertOne(ctx8, flwrosEmploy)
	if err != nil {
		return fmt.Errorf("InserOne(): %w", err)
	}

	// FLWROS END

	o := organization.Organization{
		ID:        orgUUID.String(),
		Name:      "Μπακάλικο - Ο Φρέσκος",
		AFM:       "5820571057",
		Address:   "Μαραθώνος 24, Άνω Πατήσια",
		Zipcode:   "63915",
		Owner:     employ,
		Employees: []string{tatasEmployUUID.String(), flwrosEmployUUID.String()},
	}

	ctx9, cancel9 := context.WithTimeout(ctx, 2*time.Second)
	defer cancel9()

	_, err = db.Collection("organizations").InsertOne(ctx9, o)
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
