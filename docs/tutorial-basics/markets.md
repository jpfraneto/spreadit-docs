---
sidebar_position: 2
---

# Markets

Un mercado particular está determinado por un par de identificadores, de la forma `base_currency` y `quote_currency`, donde `base_currency` es el tipo de moneda que se vende en este mercado, y `quote_currency` es el tipo de moneda que se utiliza para pagar. En este momento, spreadit trabaja con 22 mercados diferentes, los mismos que están disponibles en buda.com.

**HTTP Requests**

`GET /markets`

`GET /markets/<market_id>`

---

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at `http://localhost:3000/my-markdown-page`.
