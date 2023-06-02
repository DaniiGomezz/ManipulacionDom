const lenguajes = [
  {
    titulo: "Java",
    imagen: '/ejercicio2/img/1.png',
    descripcion: "Java es un lenguaje de programación de propósito general, orientado a objetos y con un enfoque en la portabilidad. Java se ha vuelto muy popular debido a su capacidad para funcionar en diferentes plataformas, desde computadoras de escritorio hasta dispositivos móviles y sistemas integrados.",

  },
  {
    titulo: "PHP",
    imagen: '/ejercicio2/img/2.png',
    descripcion: " Es un lenguaje de programación muy utilizado principalmente en el desarrollo web. PHP se puede incrustar dentro del código HTML para crear páginas web dinámicas o utilizarse como un lenguaje de programación independiente.",
  },
  {
    titulo: "PHYTON",
    imagen: '/ejercicio2/img/3.png',
    descripcion:"Python es un lenguaje de programación interpretado, de alto nivel y de propósito general. Python se caracteriza por su sintaxis clara y legible, lo que facilita la escritura y comprensión del código. ",
  },
];
const container = document.getElementById('cardcontainer')
container.innerHTML += lenguajes
.map((lenguajes) => {
  return `
  <div class="card my-card d-flex m-1" style="max-width: 18rem;"> 
  <img src="${lenguajes.imagen}" class="card-img-top my-img" alt="${lenguajes.titulo}">
  <div class="card-body">
  <h5>${lenguajes.titulo}</h5>
  <p>${lenguajes.descripcion}</p>
  </div>
  </div>
  `;
})
.join("");