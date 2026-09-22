# Universal Product Store — API reference
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

Base URL: 
Format: JSON 
Auth: 

## Overview
The Universal Product Store API provides a RESTful interface for managing products and product-related data.

## Authentication
Callers can authenticate using JSON Web Tokens (JWT) with a lifetime of 15 minutes.

## Token Resource
### METHOD `/token`
_updated by PR #1_
One-line description.
| field | type | yes/no |
|-------|------|----------|
| name  | type | yes/no |

**Response 200**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyIiwibmFtZSI6IkpvaGFuIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Errors
Shared error codes:
- **401**: Unauthorized
- **422**: Invalid request

## Changelog
### PR #1
* Updated the `title` property of the `AppComponent` to reflect the new product app name.
Preserve older Changelog entries from the Existing file.