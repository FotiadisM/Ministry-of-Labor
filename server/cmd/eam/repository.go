package main

import (
	"context"

	"github.com/FotiadisM/eam/server/pkg/calendar"
	"github.com/FotiadisM/eam/server/pkg/organization"
	"github.com/FotiadisM/eam/server/pkg/user"
)

type repository struct {
}

// USER
func (r repository) GetLogin(ctx context.Context, username, password string) (id string, err error) {

	return
}

func (r repository) GetUser(ctx context.Context, username string) (u *user.User, err error) {
	return
}

// ORGANIZATION

func (r repository) GetOrganization(ctx context.Context, id string) (o *organization.Organization, err error) {
	return
}

// CALENDAR
func (r repository) GetAvailableDates(ctx context.Context) (months []calendar.Month, err error) {
	return
}

func (r repository) BookDate(ctx context.Context, id string) (err error) {
	return
}
func (r repository) GetUserDates(ctx context.Context, id string) (nt []calendar.Notebook, err error) {
	return
}
