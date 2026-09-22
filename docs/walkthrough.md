# Universal Product Store — Walkthrough

Walkthrough for Universal Product Store

## Step 1: Update Component Title

*   Update `title` property in `app.component.ts` from `'Universal Product Store'` to `'Universal Product App'`.

### Updated Code
```typescript
export class AppComponent {
  title = 'Universal Product App';
}
```

### _Updated by PR #1_

### Changelog ### PR #1

## Step 2: Update Product Service Import

*   Update `ProductService` import from `./service/product.service` to its original name, assuming it was changed in the PR.

### Updated Code
```typescript
import { ProductService } from './service/product.service';
```

### Note: Manual section copy-paste as the original import was not touched.

## Step 3: Update Component CSS

*   Update `app.component.css` to include any necessary styles for the updated component title.

### Updated Code
```css
.app-component {
  /* Updated styles for the new title */
  font-size: 24px;
  font-weight: bold;
}
```

### Note: Manual section copy-paste as the original CSS was not touched.

### Changelog ### PR #1