package openapi

import (
	"context"
	"errors"
	"net/http"
	database_user "template_backend/database/paths/user"
	authentication "template_backend/infrastructure/authentication"

	"github.com/rs/zerolog/log"
)

func IsUserAuthorized(ctx context.Context, r *http.Request) (*database_user.UserProfile, error) {
	token, found := ReadTokenFromHeader(r)
	if !found {
		log.Error().Msg("Bearer format invalid")
		return nil, errors.New("invalid Token")
	}

	_, content, err := authentication.VerifyJWT(&token)
	if err != nil {
		log.Error().Msg("Couldn't verify token to verify")
		return nil, errors.New("invalid Token")
	}

	user := database_user.FindUserById(ctx, &content.ID)
	if user == nil {
		log.Error().Msg("Couldn't find user to check user role")
		return nil, errors.New("no user")
	}

	return user, nil
}
