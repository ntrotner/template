package database_user

import (
	"context"

	_ "github.com/go-kivik/couchdb"
	"github.com/go-kivik/kivik"
	"github.com/rs/zerolog/log"
)

const USER_DB = "userprofiles"

var DatabaseUser *kivik.DB
var Cache *UserCache

func createIndex(ctx context.Context) {
	indexEmail := map[string]interface{}{
		"fields": []string{"email"},
	}

	indexId := map[string]interface{}{
		"fields": []string{"_id"},
	}

	err := DatabaseUser.CreateIndex(ctx, "email-index", "json", indexEmail)
	if err != nil {
		log.Error().Msg(err.Error())
	} else {
		log.Info().
			Str("index", "email-index").
			Str("db", DatabaseUser.Name()).
			Msg("Index created")
	}

	err = DatabaseUser.CreateIndex(ctx, "id-index", "json", indexId)
	if err != nil {
		log.Error().Msg(err.Error())
	} else {
		log.Info().
			Str("index", "id-index").
			Str("db", DatabaseUser.Name()).
			Msg("Index created")
	}
}

func SetupUser(ctx context.Context, databases map[string]*kivik.DB) {
	DatabaseUser = databases[USER_DB]
	Cache = NewUserCache(ctx)
	createIndex(ctx)
}
