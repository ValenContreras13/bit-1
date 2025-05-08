'use strict';
const form1 = document.getElementById("form1");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("PROBANDO");
  const titulo = form1.elements["titulo"].value;
  const fecha = form1.elements["fecha"].value;
  const foto = form1.elements["foto"].files[0]; // Obtener archivo
  const contenido = form1.elements["contenido"].value; // Obtener texto

  console.log(foto);
  console.log(contenido);

  const result1 = `Haz realizado una publicación con el siguiente contenido:\n\n Titulo: ${titulo} \n\n Fecha: ${fecha} \n\n 📷 Foto Adjunta \n\n Contenido: ${contenido}`;
  alert(result1);
});

















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

