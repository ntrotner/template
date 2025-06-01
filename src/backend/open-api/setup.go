package openapi

import (
	"net/http"
	config "template_backend/core/config"
	admin "template_backend/open-api/handlers/admin"
	authentication "template_backend/open-api/handlers/authentication"
	httpConfig "template_backend/open-api/handlers/config"
	core "template_backend/open-api/handlers/core"
	user "template_backend/open-api/handlers/user"
	runtime "template_backend/open-api/runtime"

	"github.com/rs/zerolog/log"
)

func SetupHttp() {
	possibleControllers := []runtime.Router{}

	if config.GlobalConfig.Shared.App.User {
		AdminAPIService := admin.NewAdminAPIService()
		AdminAPIController := admin.NewAdminAPIController(AdminAPIService)
		possibleControllers = append(possibleControllers, AdminAPIController)

		AuthenticationAPIService := authentication.NewAuthenticationAPIService()
		AuthenticationAPIController := authentication.NewAuthenticationAPIController(AuthenticationAPIService)
		possibleControllers = append(possibleControllers, AuthenticationAPIController)
	}

	ConfigAPIService := httpConfig.NewConfigAPIService()
	ConfigAPIController := httpConfig.NewConfigAPIController(ConfigAPIService)
	possibleControllers = append(possibleControllers, ConfigAPIController)

	StatusAPIService := core.NewStatusAPIService()
	StatusAPIController := core.NewStatusAPIController(StatusAPIService)
	possibleControllers = append(possibleControllers, StatusAPIController)

	UserAPIService := user.NewUserAPIService()
	UserAPIController := user.NewUserAPIController(UserAPIService)
	possibleControllers = append(possibleControllers, UserAPIController)

	router := runtime.NewRouter(
		possibleControllers...,
	)
	core.SetupPerformanceLogger(router)
	core.SetupSwaggerUi(router)

	log.Info().Msg("Listening on: " + config.GlobalConfig.Server.Address)
	log.Fatal().Msg(http.ListenAndServe(config.GlobalConfig.Server.Address, router).Error())
}
