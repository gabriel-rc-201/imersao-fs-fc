package dto

import (
	"time"

	"github.com/gabriel-rc-201/imersao-fs-fc/go-gatway-api/internal/domain"
)

type CreateAccountInput struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

type AccountOutput struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Balance   float64   `json:"balance"`
	APIKey    string    `json:"api_key,omitempty"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func ToAccount(input CreateAccountInput) *domain.Account {
	return domain.NewAccount(input.Name, input.Email)
}

func FromAccount(input *domain.Account) AccountOutput {
	return AccountOutput{
		ID:        input.ID,
		Name:      input.Name,
		Email:     input.Email,
		Balance:   input.Balance,
		APIKey:    input.APIKey,
		CreatedAt: input.CreatedAt,
		UpdatedAt: input.UpdatedAt,
	}
}
