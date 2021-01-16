package calendar

import (
	"context"
)

// Hour ..
type Hour struct {
	ID     string `json:"id" bson:"_id"`
	Hour   string `json:"hour" bson:"hour"`
	Minute string `json:"minute" bson:"minute"`
	Active bool   `json:"active" bson:"active"`
}

// Day ..
type Day struct {
	Date  string `json:"date" bson:"date"`
	Hours []Hour `json:"hours" bson:"hours"`
}

// Month ..
type Month struct {
	Name string `json:"name" bson:"name"`
	Days []Day  `json:"days" bson:"days"`
}

// Notebook ..
type Notebook struct {
	UserID string `json:"userId"`
	HourID string `json:"hourId"`
}

// Repository ..
type Repository interface {
	// GetDate(ctx context.Context, id string) (err error)
	BookDate(ctx context.Context, id string) (err error)
	GetAvailableDates(ctx context.Context) (months []Month, err error)
	GetUserDates(ctx context.Context, id string) (nt []Notebook, err error)
}
