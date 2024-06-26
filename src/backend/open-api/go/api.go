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
	"net/http"
)

// AuthenticationAPIRouter defines the required methods for binding the api requests to a responses for the AuthenticationAPI
// The AuthenticationAPIRouter implementation should parse necessary information from the http request,
// pass the data to a AuthenticationAPIServicer to perform the required actions, then write the service results to the http response.
type AuthenticationAPIRouter interface {
	LoginPost(http.ResponseWriter, *http.Request)
	LogoutPost(http.ResponseWriter, *http.Request)
	RefreshTokenPost(http.ResponseWriter, *http.Request)
	RegisterPost(http.ResponseWriter, *http.Request)
}

// StatusAPIRouter defines the required methods for binding the api requests to a responses for the StatusAPI
// The StatusAPIRouter implementation should parse necessary information from the http request,
// pass the data to a StatusAPIServicer to perform the required actions, then write the service results to the http response.
type StatusAPIRouter interface {
	Health(http.ResponseWriter, *http.Request)
}

// UserAPIRouter defines the required methods for binding the api requests to a responses for the UserAPI
// The UserAPIRouter implementation should parse necessary information from the http request,
// pass the data to a UserAPIServicer to perform the required actions, then write the service results to the http response.
type UserAPIRouter interface {
	ChangeEmailPost(http.ResponseWriter, *http.Request)
	ChangePasswordPost(http.ResponseWriter, *http.Request)
	PasswordResetPost(http.ResponseWriter, *http.Request)
	ProfileGet(http.ResponseWriter, *http.Request)
}

// AuthenticationAPIServicer defines the api actions for the AuthenticationAPI service
// This interface intended to stay up to date with the openapi yaml used to generate it,
// while the service implementation can be ignored with the .openapi-generator-ignore file
// and updated with the logic required for the API.
type AuthenticationAPIServicer interface {
	LoginPost(context.Context, UserLogin, http.ResponseWriter) (ImplResponse, error)
	LogoutPost(context.Context, *http.Request) (ImplResponse, error)
	RefreshTokenPost(context.Context, http.ResponseWriter, *http.Request) (ImplResponse, error)
	RegisterPost(context.Context, UserRegistration, http.ResponseWriter) (ImplResponse, error)
}

// StatusAPIServicer defines the api actions for the StatusAPI service
// This interface intended to stay up to date with the openapi yaml used to generate it,
// while the service implementation can be ignored with the .openapi-generator-ignore file
// and updated with the logic required for the API.
type StatusAPIServicer interface {
	Health(context.Context) (ImplResponse, error)
}

// UserAPIServicer defines the api actions for the UserAPI service
// This interface intended to stay up to date with the openapi yaml used to generate it,
// while the service implementation can be ignored with the .openapi-generator-ignore file
// and updated with the logic required for the API.
type UserAPIServicer interface {
	ChangeEmailPost(context.Context, ChangeEmail, *http.Request) (ImplResponse, error)
	ChangePasswordPost(context.Context, ChangePassword, *http.Request) (ImplResponse, error)
	PasswordResetPost(context.Context, PasswordReset) (ImplResponse, error)
	ProfileGet(context.Context, *http.Request) (ImplResponse, error)
}
