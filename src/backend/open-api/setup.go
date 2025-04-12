package openapi

import (
	"net/http"
	config "template_backend/core/config"
	authentication "template_backend/open-api/handlers/authentication"
	core "template_backend/open-api/handlers/core"
	user "template_backend/open-api/handlers/user"
	runtime "template_backend/open-api/runtime"

	"github.com/rs/zerolog/log"
)

func SetupHttp() {
	AuthenticationAPIService := authentication.NewAuthenticationAPIService()
	AuthenticationAPIController := authentication.NewAuthenticationAPIController(AuthenticationAPIService)

	StatusAPIService := core.NewStatusAPIService()
	StatusAPIController := core.NewStatusAPIController(StatusAPIService)

	UserAPIService := user.NewUserAPIService()
	UserAPIController := user.NewUserAPIController(UserAPIService)

	router := runtime.NewRouter(
		AuthenticationAPIController,
		StatusAPIController,
		UserAPIController,
	)
	core.SetupPerformanceLogger(router)
	core.SetupSwaggerUi(router)

	log.Info().Msg("Listening on: " + config.GlobalConfig.Server.Address)
	log.Fatal().Msg(http.ListenAndServe(config.GlobalConfig.Server.Address, router).Error())
}
