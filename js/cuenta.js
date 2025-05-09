'use strict';
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  // event.preventDefault();

  const email = form.elements["email"].value;
  const password = form.elements["password"].value;

  console.log(email);
  console.log(password);

const result = `Bienvenid@ a nuestra plataforma \n\n Ingresaste con el email: ${email} \n\n Contraseña: ${password}`;
  alert(result);
});

