package database_common

import (
	"math/rand"
	"time"

	"golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 12)
	return string(bytes), err
}

func checkPasswordHash(password *string, hash *string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(*hash), []byte(*password))
	return err == nil
}

func CreatePassword(password *string) (string, string, error) {
	r := rand.New(rand.NewSource(time.Now().Local().UnixMilli()))
	salt := string(byte(r.Uint32()))
	hash, err := hashPassword(*password + salt)

	return hash, salt, err
}

func CheckPassword(password *string, hash *string, salt *string) bool {
	saltedPassword := *password + *salt
	return checkPasswordHash(&saltedPassword, hash)
}
