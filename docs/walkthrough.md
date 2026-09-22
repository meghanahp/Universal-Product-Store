# Universal Product Store — Walkthrough
# _updated by PR #1_

### Introduction

This walkthrough guides you through the process of setting up and using the Universal Product Store.

### Prerequisites

* A basic understanding of the Universal Product Store
* A code editor or IDE of your choice
* A Git repository cloned locally

### Step 1: Setup the Project

1. Clone the Universal Product Store repository from the command line:
```bash
git clone https://github.com/universal-product-store/universal-product-store.git
```
2. Change into the project directory:
```bash
cd universal-product-store
```
### Step 2: Install Dependencies

1. Install the required dependencies using npm or yarn:
```bash
npm install
```
or
```bash
yarn install
```
### Step 3: Run the Application

1. Start the application using the command line:
```bash
npm run start
```
or
```bash
yarn start
```
This will start the development server and open the application in your default browser.

### Step 4: Configure the Product Service

1. Update the `product.service.ts` file to use the new product data:
```typescript
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.getAllProducts();
  }
}
```
### Step 5: Update the Application Component

1. Update the `app.component.ts` file to use the new product data:
```typescript
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <ul>
      <li *ngFor="let product of products">{{ product.name }}</li>
    </ul>
  `,
})
export class AppComponent {
  products = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().then((products) => {
      this.products = products;
    });
  }

  title = 'Universal Product App';
}
```
### Step 6: Run the Application Again

1. Run the application again using the command line:
```bash
npm run start
```
or
```bash
yarn start
```
This will update the application with the new product data.

### Changelog

### PR #1

* Updated product service to use new product data
* Updated application component to display new product data

### Auto-generated sections

#### Step 1: Setup the Project
This step was updated to include the command to clone the repository.

#### Step 2: Install Dependencies
This step was updated to include the command to install dependencies.

#### Step 3: Run the Application
This step was updated to include the command to start the application.

#### Step 4: Configure the Product Service
This step was updated to include the code changes made to the product service.

#### Step 5: Update the Application Component
This step was updated to include the code changes made to the application component.

#### Step 6: Run the Application Again
This step was updated to include the command to run the application again.

Note: The auto-generated sections are updated only if there are changes in the diff. If there are no changes, the auto-generated sections remain the same.