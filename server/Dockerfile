FROM golang:1.15.6-alpine3.12 as Build

WORKDIR /app
COPY . . 
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /server ./cmd/eam

FROM scratch

COPY --from=Build /server ./

EXPOSE 8080

CMD ["./server"]