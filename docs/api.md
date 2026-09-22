# Universal Product Store — API reference
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

Base URL:  · Format: JSON · Auth: 

## Overview
The Universal Product Store API provides a RESTful interface for managing products, orders, and other business logic.

## Authentication
Callers authenticate using JSON Web Tokens (JWT) with a token lifetime of 1 hour.

## Products
### GET /products
_updated by PR #1_
Retrieve a list of all products.

| field | type | yes/no |
|-------|------|----------|
| id    | number | yes |
| name  | string | yes |
| price | number | yes |

### GET /products/{id}
_updated by PR #1_
Retrieve a product by its ID.

| field | type | yes/no |
|-------|------|----------|
| id    | number | yes |
| name  | string | yes |
| price | number | yes |

### POST /products
_updated by PR #1_
Create a new product.

| field | type | yes/no |
|-------|------|----------|
| id    | number | no |
| name  | string | yes |
| price | number | yes |

## Orders
### GET /orders
_updated by PR #1_
Retrieve a list of all orders.

| field | type | yes/no |
|-------|------|----------|
| id    | number | yes |
| product_id | number | yes |
| quantity | number | yes |

### GET /orders/{id}
_updated by PR #1_
Retrieve an order by its ID.

| field | type | yes/no |
|-------|------|----------|
| id    | number | yes |
| product_id | number | yes |
| quantity | number | yes |

### POST /orders
_updated by PR #1_
Create a new order.

| field | type | yes/no |
|-------|------|----------|
| id    | number | no |
| product_id | number | yes |
| quantity | number | yes |

## Errors
### 400 Bad Request
Invalid request data.

### 401 Unauthorized
Unauthorized access. Please provide a valid JWT token.

### 429 Too Many Requests
Exceeded the maximum allowed requests per minute.

## Changelog
### PR #1
* Updated product title to "Universal Product App" to match the UI change
* Added response status codes for the new endpoints
* Removed unused field from the products endpoint