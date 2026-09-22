Walkthrough
================

Table of Contents
-----------------

*   [Architecture](#architecture)
*   [Changelog](#changelog)
*   [Features/Walkthrough/Readme](#featureswalkthroughreadme)

Architecture
------------

### Universal Product Store — Architecture

| **Responsibility** | Description |
| --- | --- |
| **AppComponent**: | Implements a component with a title, referencing `ProductService`. |
| **ProductService**: | Provides a product service for retrieving products. |

Changelog
----------

### PR #1

#### Updated Endpoints

### Product Service API

#### Updated by PR #1

*   `GET /products`: Retrieves a list of products from the server.

Features/Walkthrough/Readme
---------------------------

### Universal Product Store Walkthrough

#### Updated by PR #1

*   [Component](#component)
    *   The `AppComponent` serves as the main component of the Universal Product Store.
    *   It uses the `ProductService` to interact with the product service.

### Updated by PR #1

#### Updated by PR #1

*   `ProductService` is used to fetch products from the server.

#### Updated by PR #1

*   The `AppComponent` updates the title to use the `ProductService`.
    *   `title = 'Universal Product App';`