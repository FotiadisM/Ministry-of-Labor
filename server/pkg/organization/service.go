package organization

import (
	"context"
	"fmt"
)

// Service ..
type Service struct {
	r Repository
}

// NewService ..
func NewService(r Repository) Service {
	return Service{r: r}
}

func (s Service) getOrganization(ctx context.Context, id string) (res *getOrganizationResponse, err error) {
	o, err := s.r.GetOrganization(ctx, id)
	if err != nil {
		return nil, fmt.Errorf("GetOrganization(): %w", err)
	}

	es, err := s.r.GetOrganizationEmployees(ctx, id)
	if err != nil {
		return nil, fmt.Errorf("GetOrganizationEmployees(): %w", err)
	}

	res = &getOrganizationResponse{
		ID:        o.ID,
		Name:      o.Name,
		AFM:       o.AFM,
		Owner:     o.Owner,
		Employees: es,
		Address:   o.Address,
		Zipcode:   o.Zipcode,
	}

	return
}

func (s Service) getEmployByUserID(ctx context.Context, id string) (e *Employ, err error) {

	return s.r.GetEmployByUserID(ctx, id)
}

func (s Service) updateEmployStatus(ctx context.Context, in *updateEmployStatusRequest) (err error) {

	sp := StatusProps{
		Status: in.Status,
		From:   in.From,
		To:     in.To,
	}

	return s.r.UpdateEmployStatus(ctx, in.FirstName, in.LastName, in.AFM, in.AMKA, sp)
}

func (s Service) cancelEmployStatus(ctx context.Context, id string) (err error) {
	return s.r.CancelEmployStatus(ctx, id)
}
