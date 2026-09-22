# Universal Product Store — API reference
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

## Overview
The Universal Product Store API provides a RESTful interface for managing products and product-related data.

## Authentication
The API uses JSON Web Tokens (JWT) for authentication. Tokens are valid for 30 minutes and must be refreshed after 25 minutes of inactivity. The `Authorization` header should be included in all requests with the token prefixed by `Bearer `.

## Product
### METHOD `/products`
_updated by PR #1_

One-line description: Retrieve a list of products.

| field | type | yes/no |
|-------|------|----------|
| id    | integer | yes |
| name  | string | no   |
| price | number | no   |

### METHOD `/products/{id}`
_updated by PR #1_

One-line description: Retrieve a product by ID.

| field | type | yes/no |
|-------|------|----------|
| id    | integer | yes |
| name  | string | no   |
| price | number | no   |

### METHOD `/products`
_updated by PR #1_

One-line description: Create a new product.

| field | type | yes/no |
|-------|------|----------|
| id    | integer | no  |
| name  | string | yes |
| price | number | yes |

### METHOD `/products/{id}`
_updated by PR #1_

One-line description: Update a product.

| field | type | yes/no |
|-------|------|----------|
| id    | integer | yes |
| name  | string | no   |
| price | number | no   |

### METHOD `/products/{id}/remove`
_updated by PR #1_

One-line description: Delete a product.

| field | type | yes/no |
|-------|------|----------|
| id    | integer | yes |
| status | string | no   |

## Errors
### 400 Bad Request
The request body is invalid or missing required fields.

### 401 Unauthorized
The token is invalid or missing.

### 429 Too Many Requests
The rate limit has been exceeded.

## Changelog
### PR #1
* Added product endpoints and fields
* Improved error responses