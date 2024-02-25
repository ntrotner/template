package database_user

type UserRole uint8

const (
	AdminUser     UserRole = 0
	TemporaryUser UserRole = 1
	ConfirmedUser UserRole = 2
)

type UserProfile struct {
	ID    string   `json:"_id,omitempty"`
	Rev   string   `json:"_rev,omitempty"`
	Hash  string   `json:"hash,omitempty"`
	Salt  string   `json:"salt,omitempty"`
	Email string   `json:"email,omitempty"`
	Roles UserRole `json:"roles,omitempty"`
}

type PublicUserProfile struct {
	ID    string `json:"_id,omitempty"`
	Email string `json:"email,omitempty"`
}
