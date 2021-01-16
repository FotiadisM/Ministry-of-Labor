EXEC1=server
EXEC2=populate

BDIR=bin

server:
	go build -o ./$(BDIR)/$(EXEC1) ./cmd/eam/main.go ./cmd/eam/repository.go

populate:
	go build -o ./$(BDIR)/$(EXEC2) ./cmd/populate/main.go ./cmd/populate/repository.go

clean:
	rm ./$(BDIR)/$(EXEC1)
	rm ./$(BDIR)/$(EXEC2)