package user

import "context"

// User ..
type User struct {
	ID          string `json:"id"`
	Username    string `json:"username"`
	Email       string `json:"email"`
	AFM         string `json:"AFM"`
	FirstName   string `json:"firstName"`
	LastName    string `json:"lastName"`
	Born        string `json:"born"`
	Tel         string `json:"tel"`
	FathersName string `json:"fathersName"`
	MothersName string `json:"mothersName"`
	Address     string `json:"address"`
	Zipcode     string `json:"zipcode"`
}

// Repository ..
type Repository interface {
	GetLogin(ctx context.Context, username, password string) (id string, err error)
	GetUser(ctx context.Context, username string) (u *User, err error)
}
