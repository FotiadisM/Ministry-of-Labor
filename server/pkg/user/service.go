package user

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

func (s Service) login(ctx context.Context, request loginRequest) (res *loginResponse, err error) {

	id, err := s.r.GetLogin(ctx, request.Username, request.Password)
	if err != nil {
		return
	}

	// return nil, httptransport.NewHTTPError(errors.New("Wrong credentials"), http.StatusUnauthorized, nil)

	u, err := s.r.GetUser(ctx, id)
	if err != nil {
		return
	}

	res = &loginResponse{User: u}

	return
}

func (s Service) getUser(ctx context.Context, id string) (u *User, err error) {

	return s.r.GetUser(ctx, id)
}

func (s Service) updateUser(ctx context.Context, u *User) (err error) {
	return s.r.UpdateUser(ctx, u)
}
