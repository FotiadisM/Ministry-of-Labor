package organization

import "context"

// Status ..
type Status string

const (
	// Normal status
	Normal Status = "NORMAL"

	// Suspension status
	Suspension Status = "SUSPENSION"

	// Vacation status
	Vacation Status = "SUSPENSION"

	// Remote status
	Remote Status = "REMOTE"

	// SpecialVacation ..
	SpecialVacation Status = "SPECIAL_VACATION"
)

// StatusProps ..
type StatusProps struct {
	Status Status `json:"status" bson:"status"`
	From   string `json:"from" bson:"from"`
	To     string `json:"to" bson:"to"`
}

// Employ ..
type Employ struct {
	ID            string       `json:"id" bson:"_id"`
	UserID        string       `json:"userId" bson:"userId"`
	OrgID         string       `json:"orgId" bson:"orgId"`
	Joined        string       `json:"joined" bson:"joined"`
	SalaryMonth   int          `json:"salaryMonth" bson:"salaryMonth"`
	Status        *StatusProps `json:"status" bson:"status"`
	TimeoffsYear  int          `json:"timeoffsYear" bson:"timeoffsYear"`
	TimeoffsTaken int          `json:"timeoffsTaken" bson:"timeoffsTaken"`
}

// Organization ...
type Organization struct {
	ID        string   `json:"id" bson:"_id"`
	Name      string   `json:"name" bson:"name"`
	AFM       string   `json:"AFM" bson:"AFM"`
	Address   string   `json:"address" bson:"address"`
	Zipcode   string   `json:"zipcode" bson:"zipcode"`
	Owner     Employ   `json:"owner" bson:"owner"`
	Employees []string `json:"employees" bsob:"employees"`
}

// Repository ..
type Repository interface {
	GetOrganization(ctx context.Context, id string) (o *Organization, err error)
	GetOrganizationEmployees(ctx context.Context, id string) (es []*Employ, err error)
	GetEmployByUserID(ctx context.Context, id string) (e *Employ, err error)
	UpdateEmployStatus(ctx context.Context, fName string, lName string, afm string, amka string, status StatusProps) (err error)
}
