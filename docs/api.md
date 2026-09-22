```
# Universal Product Store — API reference
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

Base URL:  · Format: JSON · Auth: 

## Overview
The Universal Product Store API provides a RESTful interface for managing products and product-related data.

## Authentication
Callers authenticate using the `Authorization` header with a token.

## AppComponent
### GET /
_updated by PR #1_
Retrieve the Universal Product App component metadata.

| field | type | required |
|-------|------|----------|
| name  | type | yes/no   |

**Response 200**
```json
{
  "title": "Universal Product App",
  "component": "AppComponent"
}
```

## ProductService
### GET /products
_updated by PR #1_
Retrieve a list of products.

### POST /products
_updated by PR #1_
Create a new product.

| field | type | required |
|-------|------|----------|
| name  | string | yes       |
| price | number | yes       |

**Response 201**
```json
{
  "id": 1,
  "name": "Test Product",
  "price": 9.99
}
```

## Errors
- **400** — Bad Request
- **401** — Unauthorized

### PR #1
- Added `title` property to the `AppComponent` class.
- Updated `title` property to `Universal Product App` in the `AppComponent` class.
```json
// src/app/app.component.ts
export class AppComponent {
  title = 'Universal Product App';
}
```
```json
// docs/api.md
### METHOD /products
_updated by PR #1_
Retrieve a list of products.
One-line description using real handler/type names from the diff.

| field | type | required |
|-------|------|----------|
| name  | string | yes       |
| price | number | yes       |

...
```