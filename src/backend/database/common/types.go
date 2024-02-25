package database_common

type Query struct {
	Selector map[string]interface{} `json:"selector"`
	Limit    int64                  `json:"limit,omitempty"`
	Skip     int64                  `json:"skip"`
	Fields   []interface{}          `json:"fields"`
}
