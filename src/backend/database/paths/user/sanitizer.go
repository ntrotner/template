package database_user

func SanitizeUserProfile(user *UserProfile) *PublicUserProfile {
	sanitized := PublicUserProfile{}
	sanitized.Email = user.Email
	return &sanitized
}
