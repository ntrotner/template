package common

import (
	"github.com/arl/statsviz"
	"github.com/gorilla/mux"
)

func SetupPerformanceLogger(mux *mux.Router) {
	if EnvironmentConfig.Environment != Development {
		return
	}

	mux.Methods("GET").Path("/debug/statsviz/ws").Name("GET /debug/statsviz/ws").HandlerFunc(statsviz.Ws)
	mux.Methods("GET").PathPrefix("/debug/statsviz/").Name("GET /debug/statsviz/").Handler(statsviz.Index)
}
