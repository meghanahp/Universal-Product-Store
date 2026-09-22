# Universal Product App — API reference
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

Base URL: 
Format: JSON 
Auth: 

## Overview
Short description of the API surface.

## Authentication
How callers authenticate (headers, token lifetime).

## Product Resource
Group related endpoints under a resource heading (e.g. Product resource).

### GET /
_updated by PR #1_
Get all products.

| field | type | yes/no |
|-------|------|----------|
| name  | type | yes/no |

**Response 200**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Product 1"
    }
  ]
}
```

### GET /:id
_updated by PR #1_
Get a product by ID.

| field | type | yes/no |
|-------|------|----------|
| id    | number | yes     |
| name  | string | yes     |

**Response 200**
```json
{
  "data": {
    "id": 1,
    "name": "Product 1"
  }
}
```

### POST /
_updated by PR #1_
Create a new product.

| field | type | required |
|-------|------|----------|
| name  | string | yes     |
| price | number | no       |

**Response 201**
```json
{
  "data": {
    "id": 1,
    "name": "Product 1"
  }
}
```

### PUT /:id
_updated by PR #1_
Update a product by ID.

| field | type | required |
|-------|------|----------|
| id    | number | yes     |
| name  | string | yes     |
| price | number | no       |

**Response 200**
```json
{
  "data": {
    "id": 1,
    "name": "Product 1"
  }
}
```

### DELETE /:id
_updated by PR #1_
Delete a product by ID.

**Response 204**

## Errors
Shared error codes (400, 401, 429, …) with short meanings.

### 400 Bad Request
Invalid request data.

### 401 Unauthorized
Caller is not authenticated.

### 429 Too Many Requests
Caller has exceeded the rate limit.

## Changelog
Newest first. Each entry:
### PR #1
* Renamed the app component's title from "Universal Product Store" to "Universal Product App" to better reflect the app's purpose.
* Updated the product resource to include a new endpoint for creating products.
* Fixed a typo in the product resource's response schema.