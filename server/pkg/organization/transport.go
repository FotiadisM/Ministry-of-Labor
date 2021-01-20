package organization

type getOrganizationResponse struct {
	ID        string    `json:"id" bson:"id"`
	Name      string    `json:"name" bson:"name"`
	AFM       string    `json:"AFN" bson:"AFM"`
	Address   string    `json:"address" bson:"address"`
	Zipcode   string    `json:"zipcode" bson:"zipcode"`
	Owner     Employ    `json:"owner" bson:"owner"`
	Employees []*Employ `json:"employees" bsob:"employees"`
}
