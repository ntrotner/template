package common

import (
	"os"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func SetupLogger() {
	zerolog.TimeFieldFormat = zerolog.TimeFormatUnix

	if EnvironmentConfig.Environment == Development {
		log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
	}
}
