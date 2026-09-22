# Universal Product Store — API reference
> continuum · standard documentation format — api reference
>
> Standing API reference — maintained continuously. Each PR patches only the endpoints it touches.

## Overview
The Universal Product Store API provides a set of endpoints for managing products, orders, and other related data.

## Authentication
Callers must authenticate using the provided token scheme. Tokens have a lifetime of 15 minutes.

## Token Resource
### METHOD `/token`
_updated by PR #1_
One-line description: Obtain a new token.

| field | type | yes/no |
|-------|------|----------|
| token | string | yes |

**Response 200**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGFuIjoiMjMwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Errors
Shared error codes (400, 401, 429, …) with short meanings.

### Errors
| error | description |
|-------|-------------|
| 401 | Unauthorized |
| 400 | Bad Request |

## Changelog
### PR #1
• Updated `title` in `AppComponent` to use the Universal Product App name.