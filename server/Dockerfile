FROM golang:1.15.6-alpine3.12 as Build

WORKDIR /app

RUN apk update \
    && apk upgrade \
    && apk add --no-cache \
    ca-certificates \
    && update-ca-certificates 2>/dev/null || true

COPY . . 
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o ./server ./cmd/eam

EXPOSE 8080

CMD ["./server"]