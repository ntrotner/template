package common

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/rs/zerolog/log"
)

type Environment struct {
	Environment  AppEnvironment
	Host         string
	DatabaseHost string
	JWTKey       []byte
}

type AppEnvironment string

const (
	Development AppEnvironment = "dev"
	Production  AppEnvironment = "prod"
)

func getHost() string {
	var host string = os.Getenv("host")
	if host == "" {
		host = ":8080"
	}

	return host
}

func getEnvironment() AppEnvironment {
	switch os.Getenv("environment") {
	case string(Development):
		return Development
	default:
		return Production
	}
}

func getDatabaseHost() string {
	return os.Getenv("databaseHost")
}

func getJWTKey() []byte {
	jwtKey := os.Getenv("jwtKey")
	if jwtKey == "" {
		log.Warn().Msg("JWT key is empty")
	}
	return []byte(jwtKey)
}

// get required env variables for running the service
func ReadEnv() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Error().Msg("reading .env file failed: " + err.Error())

	}

	EnvironmentConfig = Environment{
		Environment:  getEnvironment(),
		Host:         getHost(),
		DatabaseHost: getDatabaseHost(),
		JWTKey:       getJWTKey(),
	}
}

var EnvironmentConfig Environment
