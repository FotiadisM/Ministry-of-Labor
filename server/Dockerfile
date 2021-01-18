FROM golang:1.15.6-alpine3.12 as Build

WORKDIR /app
COPY . . 
RUN CGO_ENABLED=0 go build -o /bin/server ./cmd/eam

FROM scratch

COPY --from=Build /bin/server /bin/server 
EXPOSE 8080

CMD ["/bin/server"]