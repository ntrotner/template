package database_metadata

import (
	"context"

	_ "github.com/go-kivik/couchdb"
	"github.com/go-kivik/kivik"
	"github.com/rs/zerolog/log"
)

const METADATA_DB = "metadata"

var DatabaseMetadata *kivik.DB

// createIndex creates an index on the metadata database
func createIndex(ctx context.Context) {
	err := DatabaseMetadata.CreateIndex(ctx, "metadata-index", "json", map[string]interface{}{
		"fields": []string{"key"},
	})
	if err != nil {
		log.Error().Msg(err.Error())
	} else {
		log.Info().
			Str("index", "metadata-index").
			Str("db", DatabaseMetadata.Name()).
			Msg("Index created")
	}

	err = DatabaseMetadata.CreateIndex(ctx, "id-index", "json", map[string]interface{}{
		"fields": []string{"_id"},
	})
	if err != nil {
		log.Error().Msg(err.Error())
	} else {
		log.Info().
			Str("index", "id-index").
			Str("db", DatabaseMetadata.Name()).
			Msg("Index created")
	}
}

// SetupMetadata sets up the metadata database
func SetupMetadata(ctx context.Context, databases map[string]*kivik.DB) {
	DatabaseMetadata = databases[METADATA_DB]
	createIndex(ctx)
}
