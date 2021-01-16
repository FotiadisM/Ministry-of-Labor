package organization

import "context"

const (
	// Normal status
	Normal = iota

	// Suspension status
	Suspension

	// Vacation status
	Vacation

	// Remote status
	Remote
)

// Employ ..
type Employ struct {
	ID          string `json:"id"`
	UserID      string `json:"UserId"`
	Joined      string `json:"joined"`
	SalaryMonth string `json:"salaryMonth"`
	Status      string `json:"status"`
}

// Organization ..
type Organization struct {
	ID        string   `json:"id"`
	Name      string   `json:"name"`
	AFM       string   `json:"AFN"`
	Address   string   `json:"address"`
	Zipcode   string   `json:"zipcode"`
	Employees []Employ `json:"employees"`
}

// Repository ..
type Repository interface {
	GetOrganization(ctx context.Context, id string) (o *Organization, err error)
}
