class CarritoLista {
  constructor(id, nombre, descripcion, precio, precioNum, imagen) {
    (this.id = id),
      (this.nombre = nombre),
      (this.descripcion = descripcion),
      (this.precio = precio),
      (this.precioNum = precioNum),
      (this.imagen = imagen);
  }
}

// Instanciacion de objetos:

const producto1Carrito = new CarritoLista(
  1,
  "Air Jordan 1 Mid",
  "Calzado para hombre",
  "$3,199",
  3199,
  "../assets/producto1.jpg"
);

const producto2Carrito = new CarritoLista(
  2,
  "Jordan Flight Essentials",
  " ",
  "$1,049",
  1049,
  "../assets/producto2.jpg"
);

const producto3Carrito = new CarritoLista(
  3,
  "Air Jordan 1 Mid",
  "Calzado para mujer",
  "$3,199",
  3199,
  "../assets/producto3.jpg"
);

const producto4Carrito = new CarritoLista(
  4,
  "Paris Saint-Germain 2023/24",
  "Jersey de fútbol Jordan para mujer",
  "$1,899",
  1899,
  "../assets/producto4.jpg"
);

const producto5Carrito = new CarritoLista(
  5,
  "Air Jordan 1 Mid",
  "Calzado para niños grandes",
  "$2,649",
  2649,
  "../assets/producto5.jpg"
);

const producto6Carrito = new CarritoLista(
  6,
  "Air Jordan 1 Low G",
  " ",
  "$3,499",
  3499,
  "../assets/producto6.jpg"
);

const producto7Carrito = new CarritoLista(
  7,
  "Air Jordan 1 Low SE",
  " ",
  "$2,649",
  2649,
  "../assets/producto7.jpg"
);

const producto8Carrito = new CarritoLista(
  8,
  "Jordan Dri-FIT Sport",
  "Shorts Diamond para hombre",
  "$1,149",
  1149,
  "../assets/producto8.jpg"
);

const producto9Carrito = new CarritoLista(
  9,
  "Jordan Flight MVP",
  "Sudadera con gorro para hombre",
  "$2,149",
  2149,
  "../assets/producto9.jpg"
);

document.addEventListener("DOMContentLoaded", function () {
  // UBICAMOS EL BLOQUE DONDE VAMOS A IMPRIMIR EL CONTENIDO
  let mostrarCarrito = document.getElementById("mostrarCarrito");

  // INICIALIZAMOS EL BOTON -> getElementBy
  let btnProducto1 = document.getElementById("btn-producto1");
  // LE DAMOS EVENTO AL BOTON -> addEventListener
  btnProducto1.addEventListener("click", respuestaClick);
  // CREAMOS LA FUNCION DEL EVENTO
  function respuestaClick() {
    let mostrarProducto1 = document.createElement("div");
    mostrarProducto1.innerHTML = `<div id="producto1"><br>
                  <img style="width:50px; height:50px;" src=${producto1Carrito.imagen} alt="Imagen de ${producto1Carrito.nombre}" />
                  <br>${producto1Carrito.nombre}
                  <br>${producto1Carrito.descripcion}
                  <br>1 color
                  <br>${producto1Carrito.precio}
                  
                </div>`;

    // REGRESAMOS VALOR AL BLOQUE DONDE LO QUEREMOS IMPRIMIR
    mostrarCarrito.appendChild(mostrarProducto1);
  }

  let btnProducto2 = document.getElementById("btn-producto2");
  btnProducto2.addEventListener("click", respuesta2Click);
  function respuesta2Click() {
    let mostrarProducto2 = document.createElement("div");
    mostrarProducto2.innerHTML = `<div id="producto2"><br>
                  <img style="width:50px; height:50px;" src=${producto2Carrito.imagen} alt="Imagen de ${producto2Carrito.nombre}" />
                  <br>${producto2Carrito.nombre}
                 
                  <br>1 color
                  <br>${producto2Carrito.precio}
                </div>`;
    mostrarCarrito.appendChild(mostrarProducto2);
  }

  let btnProducto3 = document.getElementById("btn-producto3");
  btnProducto3.addEventListener("click", respuesta3Click);
  function respuesta3Click() {
    let mostrarProducto3 = document.createElement("div");
    mostrarProducto3.innerHTML = `<div id="producto3"><br>
                  <img style="width:50px; height:50px;" src=${producto3Carrito.imagen} alt="Imagen de ${producto3Carrito.nombre}" />
                  <br>${producto3Carrito.nombre}
                  <br>${producto3Carrito.descripcion}
                  <br>1 color
                  <br>${producto3Carrito.precio}
                </div>`;
    mostrarCarrito.appendChild(mostrarProducto3);
  }

  let btnProducto4 = document.getElementById("btn-producto4");
  btnProducto4.addEventListener("click", respuesta4Click);
  function respuesta4Click() {
    let mostrarProducto4 = document.createElement("div");
    mostrarProducto4.innerHTML = `<div id="producto4"><br>
                  <img style="width:50px; height:50px;" src=${producto4Carrito.imagen} alt="Imagen de ${producto4Carrito.nombre}" />
                  <br>${producto4Carrito.nombre}
                  <br>${producto4Carrito.descripcion}
                  <br>1 color
                  <br>${producto4Carrito.precio}
                </div>`;
    mostrarCarrito.appendChild(mostrarProducto4);
  }

  let btnProducto5 = document.getElementById("btn-producto5");
  btnProducto5.addEventListener("click", respuesta5Click);
  function respuesta5Click() {
    let mostrarProducto5 = document.createElement("div");
    mostrarProducto5.innerHTML = `<div id="producto5"><br>
                  <img style="width:50px; height:50px;" src=${producto5Carrito.imagen} alt="Imagen de ${producto5Carrito.nombre}" />
                  <br>${producto5Carrito.nombre}
                  <br>${producto5Carrito.descripcion}
                  <br>1 color
                  <br>${producto5Carrito.precio}
                </div>`;
    mostrarCarrito.appendChild(mostrarProducto5);
  }

  let btnProducto6 = document.getElementById("btn-producto6");
  btnProducto6.addEventListener("click", respuesta6Click);
  function respuesta6Click() {
    let mostrarProducto6 = document.createElement("div");
    mostrarProducto6.innerHTML = `<div id="producto6"><br>
                  <img style="width:50px; height:50px;" src=${producto6Carrito.imagen} alt="Imagen de ${producto6Carrito.nombre}" />
                  <br>${producto6Carrito.nombre}
                  <br>1 color
                  <br>${producto6Carrito.precio}
                </div>`;
    mostrarCarrito.appendChild(mostrarProducto6);
  }

  let btnProducto7 = document.getElementById("btn-producto7");
  btnProducto7.addEventListener("click", respuesta7Click);
  function respuesta7Click() {
    let mostrarProducto7 = document.createElement("div");
    mostrarProducto7.innerHTML = `<div id="producto7"><br>
                  <img style="width:50px; height:50px;" src=${producto7Carrito.imagen} alt="Imagen de ${producto7Carrito.nombre}" />
                  <br>${producto7Carrito.nombre}
                
                  <br>1 color
                  <br>${producto7Carrito.precio}
                </div>`;
    mostrarCarrito.appendChild(mostrarProducto7);
  }

  let btnProducto8 = document.getElementById("btn-producto8");
  btnProducto8.addEventListener("click", respuesta8Click);
  function respuesta8Click() {
    let mostrarProducto8 = document.createElement("div");
    mostrarProducto8.innerHTML = `<div id="producto8"><br>
                  <img style="width:50px; height:50px;" src=${producto8Carrito.imagen} alt="Imagen de ${producto8Carrito.nombre}" />
                  <br>${producto8Carrito.nombre}
                  <br>${producto8Carrito.descripcion}
                  <br>1 color
                  <br>${producto8Carrito.precio}
                </div>`;
    mostrarCarrito.appendChild(mostrarProducto8);
  }
  let btnProducto9 = document.getElementById("btn-producto9");
  btnProducto9.addEventListener("click", respuesta9Click);
  function respuesta9Click() {
    let mostrarProducto9 = document.createElement("div");
    mostrarProducto9.innerHTML = `<div id="producto9"><br>
                  <img style="width:50px; height:50px;" src=${producto9Carrito.imagen} alt="Imagen de ${producto9Carrito.nombre}" />
                  <br>${producto9Carrito.nombre}
                  <br>1 color
                  <br>${producto9Carrito.precio}
                </div>`;
    mostrarCarrito.appendChild(mostrarProducto9);
    // El elemento existe, puedes acceder a sus propiedades aquí
  }
});

let borrarCarrito = document.getElementById("borrarCarrito");
borrarCarrito.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
  mostrarCarrito.innerHTML = "";
  // mostrarCarrito.clear();
}

// STORAGE
btnDarkMode = document.getElementById("logoDark");
if (localStorage.getItem("DarkMode")) {
  // si existe
} else {
  localStorage.getItem("DarkMode", false);
}

if (localStorage.getItem("DarkMode") == "true") {
  document.body.classList.toggle("darkModeBody");
  document.getElementById("primerNav").classList.toggle("darkModeNav1");
  document.getElementById("segundoNav").classList.toggle("darkModeNav2");
  btnDarkMode.innerHTML = "Light";
}

btnDarkMode.addEventListener("click", darkMode);
function darkMode() {
  console.log("Funciona");
  document.body.classList.toggle("darkModeBody");
  document.getElementById("primerNav").classList.toggle("darkModeNav1");
  document.getElementById("segundoNav").classList.toggle("darkModeNav2");

  if (localStorage.getItem("DarkMode") == "false") {
    // MODO OSCURO STORAGE
    btnDarkMode.innerHTML = "Light";
    localStorage.setItem("DarkMode", "true");
  } else if (localStorage.getItem("DarkMode") == "true") {
    // MODO LIGHT STORAGE
    btnDarkMode.innerHTML = "Dark";
    localStorage.setItem("DarkMode", "false");
  }
}

// ELEMENTOS JSON

const producto1JSON = JSON.stringify(producto1Carrito);
const producto2JSON = JSON.stringify(producto2Carrito);
const producto3JSON = JSON.stringify(producto3Carrito);
const producto4JSON = JSON.stringify(producto4Carrito);
const producto5JSON = JSON.stringify(producto5Carrito);
const producto6JSON = JSON.stringify(producto6Carrito);
const producto7JSON = JSON.stringify(producto7Carrito);
const producto8JSON = JSON.stringify(producto8Carrito);
const producto9JSON = JSON.stringify(producto9Carrito);

localStorage.setItem("producto1", producto1JSON);
localStorage.setItem("producto2", producto2JSON);
localStorage.setItem("producto3", producto3JSON);
localStorage.setItem("producto4", producto4JSON);
localStorage.setItem("producto5", producto5JSON);
localStorage.setItem("producto6", producto6JSON);
localStorage.setItem("producto7", producto7JSON);
localStorage.setItem("producto8", producto8JSON);
localStorage.setItem("producto9", producto9JSON);
