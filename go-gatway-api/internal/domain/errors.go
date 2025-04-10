package domain

import "errors"

var (
	// ErrAccountNotFound é o erro retornado quando uma conta não é encontrada
	ErrAccountNotFound = errors.New("account not found")
	// ErrDuplicateAPIKey é o erro retornado quando uma chave API duplicada é encontrada
	ErrDuplicateAPIKey = errors.New("duplicate api key")
	// ErrInvoiceNotFound é o erro retornado quando uma fatura não é encontrada
	ErrInvoiceNotFound = errors.New("invoice not found")
	// ErrUnauthorizedAccess é o erro retornado quando um acesso não autorizado é tentado
	ErrUnauthorizedAccess = errors.New("unauthorized access")

	ErrInvalidAmount = errors.New("invalid amount")
	ErrInvalidStatus = errors.New("invalid status")
)
