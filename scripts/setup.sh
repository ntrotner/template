#!/bin/sh

cp ./scripts/git/* ./.git/hooks/

go install github.com/gordonklaus/ineffassign@latest
go install github.com/fzipp/gocyclo/cmd/gocyclo@latest
go install github.com/bykof/go-plantuml@latest