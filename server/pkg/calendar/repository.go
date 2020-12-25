package calendar

import (
	"context"
	"time"
)

// Date ..
type Date struct {
	ID     string
	Time   time.Time
	Active bool
}

// Repository ..
type Repository interface {
	CreateDay(ctx context.Context, d Date) (err error)
	BookDate(ctx context.Context, id string) (err error)
	GetAvailableDates(ctx context.Context) (dates []Date, err error)
}
