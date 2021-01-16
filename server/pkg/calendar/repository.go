package calendar

import (
	"context"
)

// Hour ..
type Hour struct {
	ID     string `json:"id"`
	Hour   string `json:"hour"`
	Minute string `json:"minute"`
	Active bool   `json:"active"`
}

// Day ..
type Day struct {
	Date  string `json:"date"`
	Hours []Hour `json:"hours"`
}

// Month ..
type Month struct {
	Name string `json:"month"`
	Days []Day  `json:"days"`
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
