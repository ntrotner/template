package common

import (
	"template_backend/common/validators"

	"github.com/go-playground/validator/v10"
)

var Validate = validator.New(validator.WithRequiredStructEnabled())

func SetupValidator() {
	validators.SetupValidPassword(Validate)
}
