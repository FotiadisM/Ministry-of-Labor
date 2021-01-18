package calendar

import (
	"context"
	"strconv"
	"time"
)

// Service ..
type Service struct {
	r Repository
}

// NewService ..
func NewService(r Repository) Service {
	return Service{r: r}
}

func (s *Service) getAvailableDates(ctx context.Context) (res *getAvailableDatesResponse, err error) {
	months, err := s.r.GetAvailableDates(ctx)
	if err != nil {
		return
	}

	margin := []int{}
	n, err := findWeekDay(months[0].Name, months[0].Days[0].Date)
	if err != nil {
		return
	}
	margin = append(margin, n)

	n, err = findWeekDay(months[1].Name, months[1].Days[0].Date)
	if err != nil {
		return
	}
	margin = append(margin, n)

	n, err = findWeekDay(months[2].Name, months[2].Days[0].Date)
	if err != nil {
		return
	}
	margin = append(margin, n)

	res = &getAvailableDatesResponse{Months: months, Days: margin}

	return
}

func (s Service) bookDate(ctx context.Context, id string) (err error) {
	return s.r.BookDate(ctx, id)
}

func findWeekDay(month, day string) (int, error) {

	var m time.Month
	switch month {
	case "February":
		m = time.February
	case "March":
		m = time.March
	case "April":
		m = time.April
	}

	d, err := strconv.Atoi(day)
	if err != nil {
		return 0, err
	}

	t := time.Date(2021, m, d, 12, 30, 0, 0, time.UTC)
	return int(t.Weekday()), nil
}
