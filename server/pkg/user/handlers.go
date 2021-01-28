package user

import (
	"encoding/json"
	"net/http"

	"github.com/FotiadisM/eam/server/pkg/httptransport"
	"github.com/gorilla/mux"
)

// LoginHandler ..
func (s Service) LoginHandler(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	req, err := decodeLoginRequest(r)
	if err != nil {
		httptransport.ErrorEncoder(w, err)
		return
	}

	res, err := s.login(ctx, req)
	if err != nil {
		httptransport.ErrorEncoder(w, err)
		return
	}

	httptransport.EncodeJSONResponse(w, res)
}

// GetUser ...
func (s Service) GetUser(w http.ResponseWriter, r *http.Request) {

	vars := mux.Vars(r)
	id := vars["id"]

	ctx := r.Context()

	u, err := s.getUser(ctx, id)
	if err != nil {
		httptransport.ErrorEncoder(w, err)
		return
	}

	httptransport.EncodeJSONResponse(w, u)
}

// UpdateUser ..
func (s Service) UpdateUser(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	u := &User{}
	if err := json.NewDecoder(r.Body).Decode(u); err != nil {
		httptransport.ErrorEncoder(w, err)
		return
	}

	if err := s.updateUser(ctx, u); err != nil {
		httptransport.ErrorEncoder(w, err)
		return
	}
}
