# API documentation
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

Base URL: 
> Format: JSON 
> Auth: 

## Overview
Short description of the API surface.

## Authentication
How callers authenticate (headers, token lifetime). Only state what the diff or existing file supports.

## ProductResource
Group related endpoints under a resource heading (e.g. Product resource).

For each endpoint use this shape:

### METHOD `/getProducts`
_updated by PR #1_
One-line description.

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
    },
    {
      "id": 2,
      "name": "Product 2"
    }
  ]
}
```

**Response 404**
```json
{
  "error": "Product not found"
}
```

## Errors
Shared error codes (400, 401, 429, …) with short meanings.

### PR #1
* Added `title` field to `AppComponent` with a new value, indicating a title change.
* Changed the `title` property of `AppComponent` from `'Universal Product Store'` to `'Universal Product App'`.
* Updated `ProductService` import path.