package openapi

import (
	config "template_backend/core/config"

	"github.com/arl/statsviz"
	"github.com/gorilla/mux"
)

func SetupPerformanceLogger(mux *mux.Router) {
	if config.GlobalConfig.Environment != config.Development {
		return
	}
	srv, err := statsviz.NewServer() // Create server or handle error
	if err != nil {
		panic(err)
	}

	mux.Methods("GET").Path("/debug/statsviz/ws").Name("GET /debug/statsviz/ws").HandlerFunc(srv.Ws())
	mux.Methods("GET").PathPrefix("/debug/statsviz/").Name("GET /debug/statsviz/").Handler(srv.Index())

}
