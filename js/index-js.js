// let boton1 = document.getElementById("btn-producto1");
// boton1.onclick = () => {
//   let containerProducto = document.getElementById("carrito");
//   let agregarProducto = document.createElement("div");
//   agregarProducto = `<div id="producto1">
//                 <img src="../assets/producto1.webp" alt="" />
//                 <p>Lo último</p>
//                 <p>Air Jordan 1 Mid</p>
//                 <p>Calzado para hombre</p>
//                 <p>1 color</p>
//                 <p>$3,199</p>
//               </div>`;
//   containerProducto.append(agregarProducto);
// };

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
  "producto1.webp"
);

const producto2Carrito = new CarritoLista(
  2,
  "Jordan Flight Essentials",
  " ",
  "$1,049",
  1049,
  "producto2.webp"
);

const producto3Carrito = new CarritoLista(
  3,
  "Air Jordan 1 Mid",
  "Calzado parka mujer",
  "$3,199",
  3199,
  "producto3.webp"
);

const producto4Carrito = new CarritoLista(
  4,
  "Paris Saint-Germain 2023/24",
  "Jersey de fútbol Jordan para mujer",
  "$1,899",
  1899,
  "producto4.webp"
);

const producto5Carrito = new CarritoLista(
  5,
  "Air Jordan 1 Mid",
  "Calzado para niños grandes",
  "$2,649",
  2649,
  "producto5.webp"
);

const producto6Carrito = new CarritoLista(
  6,
  "Air Jordan 1 Low G",
  " ",
  "$3,499",
  3499,
  "producto6.webp"
);

const producto7Carrito = new CarritoLista(
  7,
  "Air Jordan 1 Low SE",
  " ",
  "$2,649",
  2649,
  "producto7.webp"
);

const producto8Carrito = new CarritoLista(
  8,
  "Jordan Dri-FIT Sport",
  "Shorts Diamond para hombre",
  "$1,149",
  1149,
  "producto8.webp"
);

const producto9Carrito = new CarritoLista(
  9,
  "Jordan Flight MVP",
  "Sudadera con gorro para hombre",
  "$2,149",
  2149,
  "producto9.webp"
);

let containerProduct = document.getElementById("carrito");

let plantillaProducto = document.createElement("div");
plantillaProducto.innerHTML = `
 <div id="${producto1Carrito}">
                <img src="${producto1Carrito.imagen}" alt="" />
                <p>Lo último</p>
                <p>${producto1Carrito.descripcion}</p>
                <p>Jersey de fútbol Jordan para mujer</p>
                <p>1 color</p>
                <p>${producto1Carrito.precio}</p>
              </div>
`;

containerProduct.append(plantillaProducto);
