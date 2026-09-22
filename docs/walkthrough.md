---
title: Walkthrough
kind: walkthrough
target_path: docs/walkthrough.md
merge_mode: merge
current_pr_number: #1

# Updated Endpoints
When patching an endpoint touched by this PR, mark it with: _updated by PR #1_

## Preparing the Application

1. Apply the patch from `pull-1.diff` to your local repository by running the following command:
   ```bash
git apply pull-1.diff
```
   If you encounter any conflicts, resolve them and then continue with the next step.

## Verifying the Changes

1. After applying the patch, verify that the changes have been applied correctly by checking the updated `app.component.ts` file.
   ```
   diff --git a/src/app/app.component.ts b/src/app/app.component.ts
   index dedc95e..5e74ba8 100644
   --- a/src/app/app.component.ts
   +++ b/src/app/app.component.ts
   @@ -8,5 +8,5 @@ 
   import { ProductService } from './service/product.service';
   styleUrls: ['./app.component.css']
   +
   export class AppComponent {
   -  title = 'Universal Product Store';
   +  title = 'Universal Product App';
   }
   ```
   The expected output shows the changes made to the `AppComponent` class.

## API Changelog

### Updated API Endpoint

*   `GET /products`: Now returns a list of products with a brief description.
    -   **Previous Response:**
        ```json
        [
            {
                "id": 1,
                "name": "Product A",
                "price": 19.99
            }
        ]
        ```
    -   **New Response:**
        ```json
        [
            {
                "id": 1,
                "name": "Product A",
                "description": "Best-selling product",
                "price": 19.99
            }
        ]
        ```
    *   **Updated Endpoint:** `_updated by PR #1_`

---