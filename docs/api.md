# API Documentation
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

Base URL: https://example.com/api · Format: JSON · Auth: Bearer

## Overview
The Universal Product App API provides a RESTful interface for managing products and product-related data.

## Authentication
 callers must provide a valid Bearer token in the Authorization header. Token lifetime is not explicitly stated but is expected to be short-lived.

## Product Resource
### GET /products
_updated by PR #1_
Retrieve a list of all products.

| field | type | yes/no |
|-------|------|----------|
| id    | integer | yes |
| name  | string | yes |
| price | number | no |

**Response 200**
```json
{
  "products": [
    {"id": 1, "name": "Product 1", "price": 10.99},
    {"id": 2, "name": "Product 2", "price": 5.99}
  ]
}
```

## Errors
Shared error codes:

- **400 Bad Request**: Invalid request data.
- **401 Unauthorized**: Invalid or expired token.
- **429 Too Many Requests**: Rate limit exceeded.

## Changelog
### PR #1
* Updated the title of the Universal Product Store to "Universal Product App" in the app component.
* Added a new endpoint for retrieving a list of all products.