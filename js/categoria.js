'use strict';

function filtrar(categoria) {
  console.log('Filtrando por categoría:', categoria); // Depuración
  const productos = document.querySelectorAll('.productos .col'); // Selecciona todos los productos

  productos.forEach(producto => {
    console.log('Clases del producto:', producto.classList); // Verifica las clases del producto
    if (categoria === 'todos' || producto.classList.contains(categoria)) {
      producto.style.display = 'block'; // Muestra el producto
    } else {
      producto.style.display = 'none'; // Oculta el producto
    }
  });
}

