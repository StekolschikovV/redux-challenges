- Show all users https://dummyjson.com/users


- Products list https://dummyjson.com/products
- Product search https://dummyjson.com/products/search?q=phone
- Product https://dummyjson.com/products/1
- Add product

```js 
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
    })
})
    .then(res => res.json())
    .then(console.log); 
```

- Delete product

```js
fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
})
    .then(res => res.json())
    .then(console.log);
```