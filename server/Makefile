EXEC1=server
EXEC2=populate

BDIR=bin

all: server populate

server:
	go build -o ./$(BDIR)/$(EXEC1) ./cmd/eam

populate:
	go build -o ./$(BDIR)/$(EXEC2) ./cmd/populate

build:
	CGO_ENABLED=0 go build -o ./bin/${EXEC1} ./cmd/eam

clean:
	rm ./$(BDIR)/$(EXEC1)
	rm ./$(BDIR)/$(EXEC2)