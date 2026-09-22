# Universal Product Store — Walkthrough

## Introduction
Get started with the Universal Product Store by following this walkthrough.

## Prerequisites
Ensure you have a basic understanding of the Universal Product Store and its components.

## Step 1: Setting up the Universal Product Store
Run the following command to set up the Universal Product Store:
```bash
npm install
```
Update the `AppComponent` to use the `ProductService`:
```diff
--- a/src/app/app.component.ts
+++ b/src/app/app.component.ts
@@ -8,5 +8,5 @@ import { ProductService } from './service/product.service';
   styleUrls: ['./app.component.css']
 })
-export class AppComponent {
+export class AppComponent {
   title = 'Updated by PR #1_';
 }
```
## Step 1: _updated by PR #1_
### Updated Endpoint
#### Updated by PR #1
`GET /products`

#### Updated by PR #1
`POST /products`

### Step 2: Using the ProductService
Import and use the `ProductService` in your components:
```diff
--- a/src/app/app.component.ts
+++ b/src/app/app.component.ts
@@ -8,5 +8,5 @@ import { ProductService } from './service/product.service';
   styleUrls: ['./app.component.css']
 })
 export class AppComponent {
   title = 'Updated by PR #1_';
 }
```
## Step 2: Using the ProductService
#### Updated by PR #1
`getProducts()`

#### Updated by PR #1
`createProduct(productData)`

## Step 3: Integrating with the Universal Product Store
Integrate the `AppComponent` with the Universal Product Store:
```diff
--- a/src/app/app.component.ts
+++ b/src/app/app.component.ts
@@ -8,5 +8,5 @@ import { ProductService } from './service/product.service';
   styleUrls: ['./app.component.css']
 })
 export class AppComponent {
   title = 'Updated by PR #1_';
 }
```
## Step 3: Integrating with the Universal Product Store
#### Updated by PR #1
`updateProduct(productId, productData)`

#### Updated by PR #1
`deleteProduct(productId)`

## Step 4: Testing the Universal Product Store
Test the Universal Product Store by running the following command:
```bash
npm test
```
## Step 4: Testing the Universal Product Store
#### Updated by PR #1
`testGetProducts()`

#### Updated by PR #1
`testCreateProduct()`

#### Updated by PR #1
`testUpdateProduct()`

#### Updated by PR #1
`testDeleteProduct()`

### Step 4: Updated Changelog
### PR #1
- Updated `AppComponent` to use `ProductService`
- Updated `getProducts`, `createProduct`, `updateProduct`, and `deleteProduct` methods
- Added test cases for `getProducts`, `createProduct`, `updateProduct`, and `deleteProduct` methods

## Step 5: Conclusion
Congratulations! You have completed the Universal Product Store walkthrough.

### Step 5: Updated Changelog
### PR #1
- Updated `AppComponent` to use `ProductService`
- Updated `getProducts`, `createProduct`, `updateProduct`, and `deleteProduct` methods
- Added test cases for `getProducts`, `createProduct`, `updateProduct`, and `deleteProduct` methods