package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
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

	errc := make(chan error)

	go func() {
		c := make(chan os.Signal, 1)
		signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)
		terminateError := fmt.Errorf("%s", <-c)

		errc <- terminateError
	}()

	go func() {
		log.Println("HTTP server listening on port:", httpAddr)
		errc <- http.ListenAndServe(httpAddr, http.DefaultServeMux)
	}()

	log.Println("exit", <-errc)
}
