package calendar

import (
	"context"
)

// Service ..
type Service struct {
	r Repository
}

// NewService ..
func NewService(r Repository) Service {
	return Service{r: r}
}

func (s *Service) getAvailableDates(ctx context.Context) (months []Month, err error) {
	return s.r.GetAvailableDates(ctx)
}

func (s Service) bookDate(ctx context.Context, id string) (err error) {
	return s.r.BookDate(ctx, id)
}
