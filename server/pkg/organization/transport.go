package organization

type getOrganizationResponse struct {
	ID        string    `json:"id" bson:"id"`
	Name      string    `json:"name" bson:"name"`
	AFM       string    `json:"AFM" bson:"AFM"`
	Address   string    `json:"address" bson:"address"`
	Zipcode   string    `json:"zipcode" bson:"zipcode"`
	Owner     Employ    `json:"owner" bson:"owner"`
	Employees []*Employ `json:"employees" bsob:"employees"`
}

type updateEmployStatusRequest struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	AFM       string `json:"AFM"`
	AMKA      string `json:"AMKA"`
	Status    Status `json:"status"`
	From      string `json:"from"`
	To        string `json:"to"`
}
