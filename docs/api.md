# Universal Product Store — API reference
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

Base URL: `http://localhost:4200/api` · Format: JSON · Auth: Basic Auth (username="admin", password="password")

## Overview
This API reference provides an overview of the Universal Product Store API. The API is designed to manage products, orders, and other business logic.

## Authentication
Callers can authenticate using Basic Auth with username "admin" and password "password". The token is valid for 30 minutes.

## Products Resource
### GET /products
_updated by PR #1_

Retrieve a list of all products.

| field | type | yes/no |
|-------|------|----------|
| id    | number | yes |
| name  | string | yes |
| price | number | yes |

**Response 200**
```json
{
  "products": [
    {
      "id": 1,
      "name": "Product 1",
      "price": 9.99
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 19.99
    }
  ]
}
```

**Response 401**
```json
{
  "error": "Unauthorized"
}
```

## Orders Resource
### GET /orders
_updated by PR #1_

Retrieve a list of all orders.

| field | type | yes/no |
|-------|------|----------|
| id    | number | yes |
| customerName | string | yes |
| totalPrice | number | yes |

**Response 200**
```json
{
  "orders": [
    {
      "id": 1,
      "customerName": "John Doe",
      "totalPrice": 99.99
    },
    {
      "id": 2,
      "customerName": "Jane Doe",
      "totalPrice": 199.99
    }
  ]
}
```

## Errors
### 400 Bad Request
The request body is invalid or missing required fields.

### 401 Unauthorized
The request is not authenticated.

### 429 Too Many Requests
The rate limit has been exceeded.

## Changelog
### PR #1
* Added Products and Orders resources
* Updated endpoint documentation for existing endpoints
* Added Changelog entry for PR #1