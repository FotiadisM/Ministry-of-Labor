package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/FotiadisM/eam/server/pkg/calendar"
	"github.com/FotiadisM/eam/server/pkg/organization"
	"github.com/FotiadisM/eam/server/pkg/user"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

var (
	httpAddr string = ":8080"
)

func init() {
	if port := os.Getenv("PORT"); port != "" {
		httpAddr = fmt.Sprintf(":%s", port)
	}
}

func main() {
	m := mux.NewRouter()

	r, err := newRepository("mongodb://localhost:27017")
	if err != nil {
		log.Println("error connecting to db:", err)
		return
	}

	usvc := user.NewService(r)
	m.Methods("POST").Path("/login").HandlerFunc(usvc.LoginHandler)
	m.Methods("GET").Path("/user/{id}").HandlerFunc(usvc.GetUser)

	osvc := organization.NewService(r)
	m.Methods("GET").Path("/organization/{id}").HandlerFunc(osvc.GetOrganization)

	dsvc := calendar.NewService(r)
	m.Methods("GET").Path("/dates/available").HandlerFunc(dsvc.GetAvailableDates)
	m.Methods("POST").Path("/dates/book/{id}").HandlerFunc(dsvc.BookDate)

	corsOrigin := handlers.AllowedOrigins([]string{"*"})
	h := handlers.LoggingHandler(os.Stdout, handlers.CORS(corsOrigin)(m))

	errc := make(chan error)

	go func() {
		c := make(chan os.Signal, 1)
		signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)
		terminateError := fmt.Errorf("%s", <-c)

		errc <- terminateError
	}()

	go func() {

		log.Println("HTTP server listening on port", httpAddr)
		errc <- http.ListenAndServe(httpAddr, h)
	}()

	log.Println("exit", <-errc)
}
