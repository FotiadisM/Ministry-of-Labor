package organization

import (
	"net/http"

	"github.com/FotiadisM/eam/server/pkg/httptransport"
	"github.com/gorilla/mux"
)

// GetOrganization ..
func (s Service) GetOrganization(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	ctx := r.Context()

	o, err := s.getOrganization(ctx, id)
	if err != nil {
		httptransport.ErrorEncoder(w, err)
		return
	}

	httptransport.EncodeJSONResponse(w, o)
}

// GetEmployByUserID .
func (s Service) GetEmployByUserID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	ctx := r.Context()

	e, err := s.getEmployByUserID(ctx, id)
	if err != nil {
		httptransport.ErrorEncoder(w, err)
		return
	}

	httptransport.EncodeJSONResponse(w, e)
}
