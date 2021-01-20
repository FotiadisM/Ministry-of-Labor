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
	dbURI    string = "mongodb://localhost:27017"
)

func init() {
	if port := os.Getenv("PORT"); port != "" {
		httpAddr = fmt.Sprintf(":%s", port)
	}

	if uri := os.Getenv("MONGODB_URI"); uri != "" {
		dbURI = uri
	}
}

func main() {
	m := mux.NewRouter()

	r, err := newRepository(dbURI)
	if err != nil {
		log.Println("error connecting to db:", err)
		return
	}

	usvc := user.NewService(r)
	m.Methods("POST").Path("/login").HandlerFunc(usvc.LoginHandler)
	m.Methods("GET").Path("/users/{id}").HandlerFunc(usvc.GetUser)

	osvc := organization.NewService(r)
	m.Methods("GET").Path("/organizations/{id}").HandlerFunc(osvc.GetOrganization)
	m.Methods("GET").Path("/employees/userId/{id}").HandlerFunc(osvc.GetEmployByUserID)

	dsvc := calendar.NewService(r)
	m.Methods("GET").Path("/dates/available").HandlerFunc(dsvc.GetAvailableDates)
	m.Methods("POST").Path("/dates/book/{id}").HandlerFunc(dsvc.BookDate)

	corsOrigin := handlers.AllowedOrigins([]string{"*"})
	corsHeaders := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type"})
	methodsOK := handlers.AllowedMethods([]string{"GET", "POST", "OPTIONS", "DELETE", "PUT"})
	h := handlers.LoggingHandler(os.Stdout, handlers.CORS(corsOrigin, corsHeaders, methodsOK)(m))

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
