// public/js/script.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/products')
      .then(response => response.json())
      .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
          `;
          productList.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });
  