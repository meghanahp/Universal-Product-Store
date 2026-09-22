# API Documentation
## id: api

### Overview
This is the Universal Product App API documentation.

### Endpoints

#### GET /

### Product Service

#### Get Product Information

*   **Endpoint:** `/api/products/:id`
*   **Method:** `GET`
*   **Description:** Retrieves product information by ID.
*   **Request Body:** None
*   **Response:**
    *   **200 OK:** `product` object with product details
    *   **404 NOT FOUND:** Error message indicating product not found

#### Get Product List

*   **Endpoint:** `/api/products`
*   **Method:** `GET`
*   **Description:** Retrieves a list of all products.
*   **Request Body:** None
*   **Response:**
    *   **200 OK:** `products` array with product details
    *   **500 ERROR:** Error message indicating internal server error

#### Update Product Information

*   **Endpoint:** `/api/products/:id`
*   **Method:** `PUT`
*   **Description:** Updates product information by ID.
*   **Request Body:**
    *   `name`: string (product name)
    *   `price`: number (product price)
*   **Response:**
    *   **200 OK:** `product` object with updated product details
    *   **404 NOT FOUND:** Error message indicating product not found
    *   **500 ERROR:** Error message indicating internal server error

#### Delete Product

*   **Endpoint:** `/api/products/:id`
*   **Method:** `DELETE`
*   **Description:** Deletes product by ID.
*   **Request Body:** None
*   **Response:**
    *   **204 NO CONTENT:** Success message indicating product deleted
    *   **404 NOT FOUND:** Error message indicating product not found
    *   **500 ERROR:** Error message indicating internal server error

### Product Model

#### Product

*   **Type:** Object
*   **Properties:**
    *   `id`: number (product ID)
    *   `name`: string (product name)
    *   `price`: number (product price)

### Error Responses

#### Unauthorized

*   **Code:** 401
*   **Description:** Unauthorized access
*   **Response:**
    *   `error`: string (error message)

#### Forbidden

*   **Code:** 403
*   **Description:** Forbidden access
*   **Response:**
    *   `error`: string (error message)

#### Internal Server Error

*   **Code:** 500
*   **Description:** Internal server error
*   **Response:**
    *   `error`: string (error message)