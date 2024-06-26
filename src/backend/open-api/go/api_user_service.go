/*
 * Swagger - OpenAPI 3.0
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0.0
 * Contact: nikita@ttnr.me
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

import (
	"context"
	"errors"
	"net/http"
	database_user "template_backend/database/paths/user"
	openapi_common "template_backend/open-api/common"

	"github.com/rs/zerolog/log"
)

// UserAPIService is a service that implements the logic for the UserAPIServicer
// This service should implement the business logic for every endpoint for the UserAPI API.
// Include any external packages or services that will be required by this service.
type UserAPIService struct {
}

// NewUserAPIService creates a default api service
func NewUserAPIService() UserAPIServicer {
	return &UserAPIService{}
}

// ChangeEmailPost - Change user email
func (s *UserAPIService) ChangeEmailPost(ctx context.Context, changeEmail ChangeEmail, r *http.Request) (ImplResponse, error) {
	token, found := openapi_common.ReadTokenFromHeader(r)
	if !found {
		log.Error().Msg("Bearer format invalid")
		return Response(401, Error{ErrorMessages: []Message{{Code: "100", Message: "Unauthorized. Please check your credentials."}}}), nil
	}

	_, content, err := database_user.VerifyJWT(&token)
	if err != nil {
		log.Error().Msg("Couldn't verify token to refresh")
		return Response(401, Error{ErrorMessages: []Message{{Code: "100", Message: "Unauthorized. Please check your credentials."}}}), nil
	}

	_, err = database_user.ChangeUserEmail(ctx, &content.ID, &changeEmail.NewEmail)
	if err != nil {
		log.Error().Str("id", content.ID).Msg("Couldn't update email for user")
		return Response(401, Error{ErrorMessages: []Message{{Code: "100", Message: "Unauthorized. Please check your credentials."}}}), nil
	}

	return Response(200, Success{}), nil
}

// ChangePasswordPost - Change user password
func (s *UserAPIService) ChangePasswordPost(ctx context.Context, changePassword ChangePassword, r *http.Request) (ImplResponse, error) {
	token, found := openapi_common.ReadTokenFromHeader(r)
	if !found {
		log.Error().Msg("Bearer format invalid")
		return Response(401, Error{ErrorMessages: []Message{{Code: "100", Message: "Unauthorized. Please check your credentials."}}}), nil
	}

	_, content, err := database_user.VerifyJWT(&token)
	if err != nil {
		log.Error().Msg("Couldn't verify token to refresh")
		return Response(401, Error{ErrorMessages: []Message{{Code: "100", Message: "Unauthorized. Please check your credentials."}}}), nil
	}

	user := database_user.AuthenticateUserById(ctx, content.ID, changePassword.CurrentPassword)
	if user == nil {
		log.Error().Str("id", content.ID).Msg("Couldn't find user by id")
		return Response(401, Error{ErrorMessages: []Message{{Code: "100", Message: "Unauthorized. Please check your credentials."}}}), nil
	}

	_, err = database_user.ChangeUserPassword(ctx, &content.ID, &changePassword.NewPassword)
	if err != nil {
		log.Error().Str("id", content.ID).Msg("Couldn't update email for user")
		return Response(401, Error{ErrorMessages: []Message{{Code: "100", Message: "Unauthorized. Please check your credentials."}}}), nil
	}

	return Response(200, Success{}), nil
}

// PasswordResetPost - Initiate password reset
func (s *UserAPIService) PasswordResetPost(ctx context.Context, passwordReset PasswordReset) (ImplResponse, error) {
	// TODO - update PasswordResetPost with the required logic for this service method.
	// Add api_user_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	// TODO: Uncomment the next line to return response Response(200, Success{}) or use other options such as http.Ok ...
	// return Response(200, Success{}), nil

	// TODO: Uncomment the next line to return response Response(400, Error{}) or use other options such as http.Ok ...
	// return Response(400, Error{}), nil

	// TODO: Uncomment the next line to return response Response(401, Error{}) or use other options such as http.Ok ...
	// return Response(401, Error{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("PasswordResetPost method not implemented")
}

// ProfileGet - Get user profile
func (s *UserAPIService) ProfileGet(ctx context.Context, r *http.Request) (ImplResponse, error) {
	user, err := openapi_common.IsUserAuthorized(ctx, r)
	if err != nil {
		log.Error().Msg(err.Error())
		return Response(401, Error{ErrorMessages: []Message{{Code: "100", Message: "Unauthorized."}}}), nil
	}
	sanitized := database_user.SanitizeUserProfile(user)
	return Response(200, sanitized), nil
}
