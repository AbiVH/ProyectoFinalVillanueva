// SECCION BUSCADOR
// Creamos evento para seleccionar categoría en el buscador
let buscarBtn = document.getElementById("buscarBtn");

buscarBtn.onclick = () => {
  const { value: producto } = Swal.fire({
    title: "Selecciona la categoría",
    input: "select",
    inputOptions: {
      Ropa: {
        Calzado: "Calzado",
        Playeras: "Playeras",
        Sudaderas: "Sudaderas",
        Shorts: "Shorts",
      },
    },
    inputPlaceholder: "Selecciona una categoría",
    showCancelButton: true,
  });

  if (producto) {
    Swal.fire(`You selected: ${producto}`);
  }
};

// SECCIÓN SLIDE LATERAL IZQUIERDO
// Creamos el array para almaecenar los productos nuevos
let almacenProductosPersonalizados = [];
// Se crea funcion para crear objetos "Crear Producto"
function crearProducto(nombre, precio, imagen) {
  (this.nombre = nombre), (this.precio = precio), (this.imagen = imagen);
}
// Se crea un evento para crear Nuevos Productos -> Nuevo Objeto "Crear Producto"
let crearProductoBtn = document.getElementById("crearProductoBtn");
crearProductoBtn.onclick = () => {
  let nombreNuevoProducto = document.getElementById("nombreNuevoProducto");
  let precioNuevoProducto = document.getElementById("precioNuevoProducto");
  let nombreNuevo = nombreNuevoProducto.value;
  let precioNuevo = precioNuevoProducto.value;
  let verificarNombre;
  let verificarPrecio;
  nombreNuevo == ""
    ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Un buen producto debe de tener un gran título",
      })
    : (verificarNombre = true);

  precioNuevo <= 0
    ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No me alcanza, súbele el precio",
      })
    : (verificarPrecio = true);

  if (verificarNombre == true && verificarPrecio == true) {
    let nuevoProducto = new crearProducto(nombreNuevo, precioNuevo);
    almacenProductosPersonalizados.push(nuevoProducto);
    console.log(almacenProductosPersonalizados);
    nombreNuevoProducto.value = "";
    precioNuevoProducto.value = "";
  }
};

// SEECIÓN CONTENIDO
// Creamos un array para imprimir el contenido inicial

let contenidoInicial = [];

function imprimirProductos(apiJson) {
  let contenedorProductos = document.getElementById("contenedorProductos");

  fetch(apiJson)
    .then((resultado) => {
      return resultado.json();
    })
    .then((info) => {
      info.forEach((producto) => {
        let agregarImpresionProducto = document.createElement("div");
        agregarImpresionProducto.className =
          "col-12 col-md-6 col-lg-4 col-my-2";
        agregarImpresionProducto.innerHTML = `<div id="${producto.id}" style="text-align: center">
        <img src="../assets/${producto.imagen}" alt="" style="width: 18rem" ; />
        <p>Lo último</p>
        <p>${producto.nombre}</p>
        <p>1 color</p>
        <p>$${producto.precio}</p>
        <button id="btn-producto${producto.id}">COMPRAR</button>
      </div>
      <br>`;
        contenedorProductos.appendChild(agregarImpresionProducto);
      });
    });
}

imprimirProductos("../json/general.json");
