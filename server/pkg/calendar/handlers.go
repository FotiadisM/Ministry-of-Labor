package calendar

import (
	"net/http"

	"github.com/FotiadisM/eam/server/pkg/httptransport"
	"github.com/gorilla/mux"
)

// GetAvailableDates ..
func (s Service) GetAvailableDates(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	m, err := s.getAvailableDates(ctx)
	if err != nil {
		httptransport.ErrorEncoder(w, err)
		return
	}

	httptransport.EncodeJSONResponse(w, m)
}

// BookDate ..
func (s Service) BookDate(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	ctx := r.Context()

	err := s.bookDate(ctx, id)
	if err != nil {
		httptransport.ErrorEncoder(w, err)
		return
	}
}
