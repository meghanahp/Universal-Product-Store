# Universal Product Store — API reference

### Changelog ### PR #1

### Updated endpoints

- `getProduct` (_updated by PR #1_)
- `updateProduct` (_updated by PR #1_)

### API Reference

#### Product Service

##### `getProduct(product_id)`

Retrieves a product by its ID.

`GET /products/{product_id}`

* Returns a product object with the specified ID.

```typescript
import { ProductService } from './service/product.service';

const productService = new ProductService();
const product = await productService.getProduct('123');
console.log(product);
```

##### `updateProduct(product_id, product_data)`

Updates a product by its ID.

`PATCH /products/{product_id}`

* Returns the updated product object.

```typescript
import { ProductService } from './service/product.service';

const productService = new ProductService();
const product = await productService.updateProduct('123', { name: 'New Name' });
console.log(product);
```

#### Error Handling

The API returns a 404 status code for unknown product IDs.

`404 Not Found`

```typescript
import { ProductService } from './service/product.service';

const productService = new ProductService();
try {
  const product = await productService.getProduct('non-existent-id');
} catch (error) {
  console.error(error.message);
}
```

#### Product Data

The API expects the following product data structure:

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "number"
}
```

### Code Snippets

#### TypeScript

```typescript
import { ProductService } from './service/product.service';

const productService = new ProductService();
const product = await productService.getProduct('123');
console.log(product);
```

#### JavaScript

```javascript
import ProductService from './service/product.service';

const productService = new ProductService();
const product = productService.getProduct('123');
console.log(product);
```

#### Example Use Case

```bash
curl -X GET \
  http://localhost:4200/products/123 \
  -H 'Content-Type: application/json'

{
  "id": "123",
  "name": "Example Product",
  "description": "This is an example product.",
  "price": 9.99
}
```

#### Example Use Case

```bash
curl -X PATCH \
  http://localhost:4200/products/123 \
  -H 'Content-Type: application/json' \
  -d '{"name": "New Name"}'

{
  "id": "123",
  "name": "New Name",
  "description": "This is an example product.",
  "price": 9.99
}
```