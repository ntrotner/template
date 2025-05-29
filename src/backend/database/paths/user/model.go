package database_user

type UserRole string

const (
	AdminUser   UserRole = "admin"
	User        UserRole = "user"
	Unconfirmed UserRole = "unconfirmed"
)

type UserProfile struct {
	ID    string   `json:"_id,omitempty"`
	Rev   string   `json:"_rev,omitempty"`
	Hash  string   `json:"hash,omitempty"`
	Salt  string   `json:"salt,omitempty"`
	Email string   `json:"email,omitempty"`
	Role  UserRole `json:"role,omitempty"`
}

type PublicUserProfile struct {
	ID    string   `json:"_id,omitempty"`
	Email string   `json:"email,omitempty"`
	Role  UserRole `json:"role,omitempty"`
}
