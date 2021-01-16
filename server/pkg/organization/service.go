package organization

import "context"

// Service ..
type Service struct {
	r Repository
}

// NewService ..
func NewService(r Repository) Service {
	return Service{r: r}
}

func (s Service) getOrganization(ctx context.Context, id string) (o *Organization, err error) {

	return s.r.GetOrganization(ctx, id)
}
