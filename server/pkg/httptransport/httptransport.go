package httptransport

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// Headerer ..
type Headerer interface {
	Headers() http.Header
}

// StatusCoder ..
type StatusCoder interface {
	StatusCode() int
}

// HTTPError is a custom error
type HTTPError struct {
	error
	statusCode int
	headers    http.Header
}

// NewHTTPError return a new HTTPError
func NewHTTPError(err error, StatusCode int, headers http.Header) HTTPError {
	return HTTPError{
		error:      err,
		statusCode: StatusCode,
		headers:    headers,
	}
}

// StatusCode ..
func (h HTTPError) StatusCode() int {
	return h.statusCode
}

// Headers ..
func (h HTTPError) Headers() http.Header {
	return h.headers
}

type errorWrapper struct {
	Error string `json:"error"`
}

// ErrorEncoder ..
func ErrorEncoder(w http.ResponseWriter, err error) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	body, _ := json.Marshal(errorWrapper{Error: err.Error()})
	fmt.Printf("Err: %v - - ", err)

	if headerer, ok := err.(Headerer); ok {
		for k := range headerer.Headers() {
			w.Header().Set(k, headerer.Headers().Get(k))
		}
	}

	code := http.StatusInternalServerError
	if sc, ok := err.(StatusCoder); ok {
		code = sc.StatusCode()
	}

	w.WriteHeader(code)
	w.Write(body)
}

// EncodeJSONResponse serializes the response as a JSON object to the ResponseWriter
func EncodeJSONResponse(w http.ResponseWriter, response interface{}) (err error) {

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	json.NewEncoder(w).Encode(response)

	return
}
