package database_user

import (
	"context"
	"errors"
	database_common "template_backend/database/common"

	"github.com/google/uuid"
	"github.com/rs/zerolog/log"
)

func CreateUser(ctx context.Context, email string, password string) (*UserProfile, error) {
	uniqueID := uuid.NewString()
	hash, salt, err := database_common.CreatePassword(&password)
	if err != nil {
		log.Error().
			Str("email", email).
			Msg(err.Error())
	}

	user := UserProfile{
		ID:    uniqueID,
		Hash:  hash,
		Salt:  salt,
		Email: email,
		Roles: TemporaryUser,
	}

	// Insert the document into the database
	rev, err := DatabaseUser.Put(ctx, user.ID, user)
	if err != nil {
		log.Error().
			Str("email", email).
			Msg(err.Error())

		return nil, err
	}

	log.Info().
		Str("rev", rev).
		Str("email", email).
		Msg("Created User")

	dbUser := FindUserById(ctx, &uniqueID)
	if dbUser == nil {
		log.Error().
			Str("email", email).
			Msg("Couldn't find newly created account")

		return nil, errors.New("couldn't find newly created account")
	}

	return dbUser, nil
}
