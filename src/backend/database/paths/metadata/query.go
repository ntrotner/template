package database_metadata

import (
	"context"
	database_common "template_backend/database/common"

	"github.com/rs/zerolog/log"
)

// createFindMetadataQuery creates a query to find a metadata item in the database
func createFindMetadataQuery(key *string, fields []interface{}) database_common.Query {
	query := database_common.Query{
		Selector: map[string]interface{}{},
		Fields:   fields,
	}

	if key != nil {
		query.Selector["key"] = map[string]interface{}{"$eq": *key}
	}

	return query
}

func GetMetadataByKey(ctx context.Context, key string) (*MetadataItem, error) {
	query := createFindMetadataQuery(&key, []interface{}{})
	rows, err := DatabaseMetadata.Find(ctx, query)
	if err != nil {
		log.Error().Msg(err.Error())
	}
	defer rows.Close()

	for rows.Next() {
		var metadata MetadataItem
		if err := rows.ScanDoc(&metadata); err != nil {
			return nil, err
		}

		return &metadata, nil
	}

	return nil, nil
}

func GetMetadata(ctx context.Context) ([]MetadataItem, error) {
	query := createFindMetadataQuery(nil, []interface{}{})
	rows, err := DatabaseMetadata.Find(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	metadataItems := []MetadataItem{}
	for rows.Next() {
		var metadata MetadataItem
		if err := rows.ScanDoc(&metadata); err != nil {
			return nil, err
		}
		metadataItems = append(metadataItems, metadata)
	}

	return metadataItems, nil
}
