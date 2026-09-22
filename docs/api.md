# Universal Product Store — API reference
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

Base URL: `https://example.com/api`
· Format: JSON · Auth: `Bearer`

## Overview
This API reference describes the Universal Product Store's API surface.

## Authentication
Callers authenticate using the `Authorization` header with a Bearer token.

## AppComponent
### METHOD `/app.component`
_updated by PR #1_

| field | type | required |
|-------|------|----------|
| name  | type | yes/no   |

**Response 200**
```json
{
  "message": "Component App Component"
}
```

## ProductService
### METHOD `/product.service`
_updated by PR #1_

| field | type | required |
|-------|------|----------|
| name  | type | yes/no   |

**Response 200**
```json
{
  "products": [
    {
      "id": 1,
      "name": "Product 1"
    }
  ]
}
```

## Errors
### 401 Unauthorized
If the token is missing or invalid, a 401 Unauthorized error is returned.

### 500 Internal Server Error
If an internal server error occurs, a 500 Internal Server Error response is returned.

## Changelog
### PR #1
* Updated `AppComponent` title from "Universal Product Store" to "Universal Product App"
* Added `ProductService` documentation with example usage