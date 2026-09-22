# Universal Product Store — walkthrough

### Introduction
This walkthrough guides you through the process of setting up the Universal Product Store.

### Step 1: Update Product Service

Update the `ProductService` import in the `AppComponent` to include the new product service.

```diff
--- a/src/app/app.component.ts
+++ b/src/app/app.component.ts
@@ -8,5 +8,5 @@ import { ProductService } from './service/product.service';
   styleUrls: ['./app.component.css']
 })
 export class AppComponent {
-  title = 'Universal Product Store';
+  title = _updated by PR #1_ 'Universal Product App';
 }
```

### Step 2: Update Component CSS

Update the component CSS to include the new styles.

```diff
--- a/src/app/app.component.css
+++ b/src/app/app.component.css
@@ -0,0 +1,4 @@
/* No changes */
```

### Step 3: Update Product Service

Update the `ProductService` to include the new product data.

```diff
--- a/src/app/service/product.service.ts
+++ b/src/app/service/product.service.ts
@@ -8,5 +8,5 @@ import { Injectable } from '@angular/core';
   styles: ['./product.service.css']
 })
 export class ProductService {
-  private products = [
-    { id: 1, name: 'Product 1' },
-    { id: 2, name: 'Product 2' }
+  private products = [
+    { id: 1, name: 'Product 1' },
+    { id: 2, name: 'Product 2' },
+    { id: 3, name: 'Product 3' }
 }

// ...
```

### Step 4: Update Product Service CSS

Update the `product.service.css` to include the new styles.

```diff
--- a/src/app/service/product.service.css
+++ b/src/app/service/product.service.css
@@ -0,0 +1,4 @@
/* No changes */
```

### Step 5: Commit Changes

Commit the changes with a meaningful commit message, such as "Update Universal Product Store to include new product service".

### Changelog
### PR #1
* Updated `AppComponent` to include new product service
* Updated `AppComponent` CSS to include new styles
* Updated `ProductService` to include new product data
* Updated `ProductService` CSS to include new styles