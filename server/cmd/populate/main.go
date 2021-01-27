package main

import (
	"context"
	"log"
	"os"
)

var (
	dbURI string = "mongodb://localhost:27017"
)

func init() {
	if uri := os.Getenv("DATABASE_URI"); uri != "" {
		dbURI = uri
	}
}

func main() {
	r, err := newRepository(dbURI)
	if err != nil {
		log.Println("error connecting to db:", err)
		return
	}

	// populating db
	ctx := context.Background()
	if err = r.PopulateUsers(ctx); err != nil {
		log.Println(err)
		return
	}

	if err = r.PopulateBookingDates(ctx); err != nil {
		log.Println(err)
		return
	}
}
