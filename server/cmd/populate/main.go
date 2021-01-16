package main

import (
	"context"
	"log"
)

func main() {
	r, err := newRepository("mongodb://localhost:27017")
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
