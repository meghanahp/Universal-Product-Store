# Changelog

## [Unreleased]

### PR #1
### API
### Updated endpoint: `/app`
Updated `/app` endpoint to return a different response.
### Architecture
### 3 Building blocks
*   Replaced `Universal Product Store` with `Universal Product App` in `AppComponent`.
### 5 Key decisions
*   Updated `title` property in `AppComponent` to use the new app name.
### Runtime view
*   Removed unused import statement `ProductService`.
### Changed
*   Added `title` property to `AppComponent` with new app name.