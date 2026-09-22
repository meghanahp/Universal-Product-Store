# Universal Product Store — Walkthrough

## Table of Contents
*   [Prerequisites](#prerequisites)
*   [Step 1: Setting up the App](#step-1-setting-up-the-app)
*   [Step 2: Fetching Product Data](#step-2-fetching-product-data)
*   [Step 3: Displaying Product Information](#step-3-displaying-product-information)
*   [Step 4: Updating Product Data](#step-4-updating-product-data)

## Prerequisites
To complete this walkthrough, ensure you have the following:

*   Node.js installed on your machine
*   The project directory cloned from the repository

## Step 1: Setting up the App
1.  Open your terminal and navigate to the project directory.
2.  Run the following command to initialize the project:

    ```bash
npm init
```
3.  Install the required dependencies:

    ```bash
npm install
```
4.  Start the application:

    ```bash
npm start
```

## Step 2: Fetching Product Data
1.  Open the `AppComponent` file and verify that the `ProductService` is injected.

    ```typescript
import { ProductService } from './service/product.service';
```
2.  Run the following command to fetch product data:

    ```bash
npm run fetch-data
```

## Step 3: Displaying Product Information
1.  Open the `AppComponent` file and update the `title` property to reflect the product name.

    ```typescript
title = 'Updated Universal Product App';
```
2.  Run the following command to display product information:

    ```bash
npm run display-product
```

## Step 4: Updating Product Data
1.  Open the `ProductService` file and update the `updateProduct` method.

    ```typescript
updateProduct(id: number, data: any) {
  // Update product data here
}
```
2.  Run the following command to update product data:

    ```bash
npm run update-product
```

### Changelog
### PR #1

*   Updated `AppComponent` to display product information
*   Updated `ProductService` to handle product data updates

### Updated by PR #1

### Updated by PR #1

---

#### auto Section 1: 
| Component | Responsibility |
| --- | --- |
| AppComponent | Displays product information |
| ProductService | Fetches product data |

#### auto Section 2: 
| Component | Responsibility |
| --- | --- |
| ProductService | Updates product data |

#### auto Section 3: 
| Component | Responsibility |
| --- | --- |
| update-product | Updates product data |

#### auto Section 4: 
| Component | Responsibility |
| --- | --- |
| npm run fetch-data | Fetches product data |
| npm run display-product | Displays product information |
| npm run update-product | Updates product data |