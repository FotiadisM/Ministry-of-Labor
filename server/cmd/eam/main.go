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

	fmt.Println(os.Getenv("GOPATH"))

	m := mux.NewRouter()
	r := repository{}

	usvc := user.NewService(r)
	m.Methods("POST").Path("/login").HandlerFunc(usvc.LoginHandler)
	m.Methods("GET").Path("/user/{id}").HandlerFunc(usvc.GetUser)

	osvc := organization.NewService(r)
	m.Methods("GET").Path("/organization/{id}").HandlerFunc(osvc.GetOrganization)

	dsvc := calendar.NewService(r)
	m.Methods("GET").Path("/dates/available").HandlerFunc(dsvc.GetAvailableDates)
	m.Methods("POST").Path("/dates/bool/{id}").HandlerFunc(dsvc.BookDate)

	errc := make(chan error)

	go func() {
		c := make(chan os.Signal, 1)
		signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)
		terminateError := fmt.Errorf("%s", <-c)

		errc <- terminateError
	}()

	go func() {
		log.Println("HTTP server listening on port:", httpAddr)
		errc <- http.ListenAndServe(httpAddr, m)
	}()

	log.Println("exit", <-errc)
}
