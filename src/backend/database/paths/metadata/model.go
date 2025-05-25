package database_metadata

type MetadataItem struct {
	ID        string `json:"_id,omitempty"`
	Rev       string `json:"_rev,omitempty"`
	Key       string `json:"key"`
	Value     string `json:"value"`
	AdminOnly bool   `json:"admin_only"`
}
