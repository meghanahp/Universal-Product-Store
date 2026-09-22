# Universal Product Store — Walkthrough

Walkthrough for Universal Product Store
=====================================

## Getting Started
---------------

### Prerequisites

*   Make sure you have Node.js installed on your machine.
*   Install the required dependencies by running `npm install` in the root directory of your project.

### Step 1: Initialize the Store
------------------------------

1.  Run `npm start` to start the store.
2.  The store will start serving products from the database.
3.  You will see a page with a list of products.

### Step 2: Adding a New Product
------------------------------

1.  Open the `product.service.ts` file.
2.  Update the `addProduct` function to include the new product details.
3.  Run `npm start` again to update the product list.

### Step 3: Updating a Product
---------------------------

1.  Open the `product.service.ts` file.
2.  Update the `updateProduct` function to update the existing product.
3.  Run `npm start` again to update the product list.

### Step 4: Removing a Product
---------------------------

1.  Open the `product.service.ts` file.
2.  Update the `removeProduct` function to remove the product.
3.  Run `npm start` again to update the product list.

### Step 5: API Endpoints
---------------------

*   The following API endpoints are available:
    *   `POST /products`: Creates a new product.
    *   `GET /products`: Retrieves a list of products.
    *   `GET /products/:id`: Retrieves a product by ID.
    *   `PUT /products/:id`: Updates a product.
    *   `DELETE /products/:id`: Removes a product.

### Step 6: Architecture
---------------------

### Auto Section 1: Component Tree
---------------------------------

*   The component tree is as follows:
    *   `AppComponent`
        *   `ProductListComponent`
        *   `ProductDetailComponent`

### Auto Section 2: Service Layer
------------------------------

*   The service layer is responsible for interacting with the database.
*   It includes the `ProductService` and `DatabaseService`.

### Auto Section 3: API Gateway
---------------------------

*   The API gateway is responsible for handling incoming requests.
*   It includes the `APIGateway` and `Router`.

### Manual Section: Security
-------------------------

*   The store uses JSON Web Tokens (JWT) for authentication and authorization.
*   JWTs are generated using the `jwt` library.

### Updated by PR #1

### Changelog ### PR #1

*   Updated `app.component.ts` to use a new title.
*   Updated `product.service.ts` to include new product details.
*   Updated `product.service.ts` to update existing products.
*   Updated `product.service.ts` to remove products.
*   Updated the API endpoints to include new methods.
*   Updated the architecture to include new components and services.
*   Updated the security to include JWT generation.