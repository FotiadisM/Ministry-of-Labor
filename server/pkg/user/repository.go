package user

import "context"

// User ..
type User struct {
	ID          string `json:"id" bson:"_id"`
	Username    string `json:"username" bson:"username"`
	Email       string `json:"email" bson:"email"`
	AFM         string `json:"AFM" bson:"afm"`
	FirstName   string `json:"firstName" bson:"firstName"`
	LastName    string `json:"lastName" bson:"lastName"`
	Born        string `json:"born" bson:"born"`
	Tel         string `json:"tel" bson:"tel"`
	FathersName string `json:"fathersName" bson:"fathersName"`
	MothersName string `json:"mothersName" bson:"mothersName"`
	Address     string `json:"address" bson:"address"`
	Zipcode     string `json:"zipcode" bson:"zipcode"`
}

// Repository ..
type Repository interface {
	GetLogin(ctx context.Context, username, password string) (id string, err error)
	GetUser(ctx context.Context, id string) (u *User, err error)
}
