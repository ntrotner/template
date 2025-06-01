package database_metadata

import (
	"context"

	"github.com/go-kivik/kivik"
	"github.com/google/uuid"
)

func UpdateMetadata(ctx context.Context, metadata MetadataItem) error {
	currentMetadata, err := GetMetadataByKey(ctx, metadata.Key)
	if err != nil {
		return err
	}

	if currentMetadata != nil {
		currentMetadata.Value = metadata.Value
		_, err := DatabaseMetadata.Put(ctx, currentMetadata.ID, currentMetadata, kivik.Options{"_rev": currentMetadata.Rev})
		if err != nil {
			return err
		}
	} else {
		newMetadata := MetadataItem{
			ID:    uuid.NewString(),
			Key:   metadata.Key,
			Value: metadata.Value,
		}

		_, err := DatabaseMetadata.Put(ctx, newMetadata.ID, newMetadata)
		if err != nil {
			return err
		}
	}

	return nil
}
