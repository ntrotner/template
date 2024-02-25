package database_user

import (
	"context"
	"time"

	cache "github.com/Code-Hex/go-generics-cache"
)

type UserCache struct {
	userEmailToId *cache.Cache[string, string]
	userFromId    *cache.Cache[string, *UserProfile]
}

func (c *UserCache) setUser(user *UserProfile) {
	c.userFromId.Set(user.ID, user, cache.WithExpiration(time.Second*30))
	c.userEmailToId.Set(user.Email, user.ID, cache.WithExpiration(time.Second*30))
}

func (c *UserCache) getUserByEmail(email *string) *UserProfile {
	userId, found := c.userEmailToId.Get(*email)
	if found {
		return c.getUserById(&userId)
	}
	return nil
}

func (c *UserCache) getUserById(id *string) *UserProfile {
	user, found := c.userFromId.Get(*id)
	if found {
		return user
	}
	return nil
}

func NewUserCache(ctx context.Context) *UserCache {
	userEmailToId := cache.NewContext[string, string](ctx)
	userFromId := cache.NewContext[string, *UserProfile](ctx)

	return &UserCache{
		userEmailToId: userEmailToId,
		userFromId:    userFromId,
	}
}
