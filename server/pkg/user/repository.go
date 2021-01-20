package user

import "context"

// EmploymentInfo ..
type EmploymentInfo struct {
	EmployID       string `json:"employId" bson:"employId"`
	OrganizationID string `json:"organizationID" bson:"organizationID"`
	IsOwner        bool   `json:"isOwner" bson:"isOwner"`
}

// User ..
type User struct {
	ID             string          `json:"id" bson:"_id"`
	EmploymentInfo *EmploymentInfo `json:"employmentInfo" bson:"employmentInfo"`
	Username       string          `json:"-" bson:"username"`
	Email          string          `json:"email" bson:"email"`
	AFM            string          `json:"AFM" bson:"afm"`
	AMKA           string          `json:"AMKA" bson:"AMKA"`
	FirstName      string          `json:"firstName" bson:"firstName"`
	LastName       string          `json:"lastName" bson:"lastName"`
	Born           string          `json:"born" bson:"born"`
	Tel            string          `json:"tel" bson:"tel"`
	FathersName    string          `json:"fathersName" bson:"fathersName"`
	MothersName    string          `json:"mothersName" bson:"mothersName"`
	Address        string          `json:"address" bson:"address"`
	Zipcode        string          `json:"zipcode" bson:"zipcode"`
}

// Repository ..
type Repository interface {
	GetLogin(ctx context.Context, username, password string) (id string, err error)
	GetUser(ctx context.Context, id string) (u *User, err error)
}
