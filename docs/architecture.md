# Universal Product Store — architecture
Standing architecture document · last auto-updated by PR #1

## 1. Introduction & goals
 
## 2. System context
| system | relationship |
|--------|--------------|
| ProductService | dependency |
| ProductStore | dependency |

## 3. Building blocks
```mermaid
flowchart TB
COMPONENT[ProductService]
COMPONENT[ProductStore]
COMPONENT[AppComponent]

ProductService->>ProductStore: fetch products
ProductStore->>AppComponent: products
```


| component | responsibility |
|------------|-----------------|
| ProductService | fetch products    |
| ProductStore | products         |
| AppComponent | display products |

## 4. Runtime view
The request for product data is now handled by ProductService, which fetches products and passes them to ProductStore. ProductStore then passes the products to AppComponent, which displays them.

## 5. Key decisions
| decision | rationale | source |
|----------|-----------|--------|
| Fetch products from ProductService | Faster and more efficient | PR #1 |

## 6. Risks & technical debt
| risk | status |
|-------|--------|
|  |  |