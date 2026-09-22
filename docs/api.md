# Universal Product Store — API reference
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

Base URL: 
> Format: JSON 
> Auth: 

## Overview
The Universal Product Store API provides a RESTful interface for managing products and product-related data.

## Authentication
Callers authenticate using the provided token, which has a lifetime of 15 minutes.

## AppComponent
### GET /
_updated by PR #1_
One-line description using real handler/type names from the diff.

| field | type | required |
|-------|------|----------|
| name  | type | yes/no   |

**Response 200**
```json
{
  "data": []
}
```

## ProductService
### GET /products
Updated by PR #1
One-line description using real handler/type names from the diff.

| field | type | required |
|-------|------|----------|
| id    | int  | yes       |
| name  | str  | yes       |
| price | float| yes       |

**Response 200**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Product 1",
      "price": 10.99
    }
  ]
}
```

## Errors
### 400 Bad Request
Short description of the error.

### 401 Unauthorized
Short description of the error.

## Changelog
### PR #1
* Updated the `title` property of the `AppComponent` to `Universal Product App`.
* Added the `ProductService` import and updated the `title` property of the `AppComponent` to `Universal Product App`.