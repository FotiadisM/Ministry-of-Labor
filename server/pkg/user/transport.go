package user

import (
	"encoding/json"
	"net/http"
)

type loginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type loginResponse struct {
	User *User `json:"user"`
}

func decodeLoginRequest(r *http.Request) (loginRequest, error) {

	req := loginRequest{}
	err := json.NewDecoder(r.Body).Decode(&req)

	return req, err
}
