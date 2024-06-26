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

// remove omitifempty
type Health struct {
	Server bool `json:"server"`

	Db bool `json:"db"`
}

// AssertHealthRequired checks if the required fields are not zero-ed
func AssertHealthRequired(obj Health) error {
	return nil
}

// AssertHealthConstraints checks if the values respects the defined constraints
func AssertHealthConstraints(obj Health) error {
	return nil
}
