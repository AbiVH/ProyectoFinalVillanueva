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
    let nuevoProducto = new crearProducto(
      nombreNuevo,
      precioNuevo,
      "incognito.png"
    );
    // almacenProductosPersonalizados.push(nuevoProducto);
    console.log(almacenProductosPersonalizados);
    nombreNuevoProducto.value = "";
    precioNuevoProducto.value = "";
    // let seccionTienda = localStorage.getItem("contenidoPrincipal");
    // seccionTienda.push(nuevoProducto);
  }
};

// SEECIÓN CONTENIDO
// declaramos array de los productos que se verán en la sección principal
let productosPrincipales = [];
fetch("../json/calzado.json")
  .then((res) => res.json())
  .then((info) => {
    info.forEach((productos) => {
      productosPrincipales.push(productos);
    });

    // Convertir el array a una cadena JSON y guardarla en el localStorage
    localStorage.setItem(
      "contenidoPrincipal",
      JSON.stringify(productosPrincipales)
    );
  })
  .catch((error) => {
    console.error("Error al cargar el JSON: " + error);
  });
// Codicionamos el Storage para que se nos carge una vista preliminar
if (localStorage.getItem("contenidoPrincipal")) {
  let almacenStorage = localStorage.getItem("contenidoPrincipal");
  let productosLocalStorage = JSON.parse(almacenStorage);

  console.log(productosLocalStorage);
  mostrarProductos(productosLocalStorage);
} else {
  function imprimirProductos(apiJson) {
    fetch(apiJson)
      .then((resultado) => {
        return resultado.json();
      })
      .then((info) => {
        mostrarProductos(info);
      });
  }
  imprimirProductos("../json/general.json");
}
// creamos funcion para mostrar productos en la sección principal
function mostrarProductos(array) {
  let contenedorProductos = document.getElementById("contenedorProductos");
  array.forEach((producto) => {
    let agregarImpresionProducto = document.createElement("div");
    agregarImpresionProducto.className = "col-12 col-md-6 col-lg-4 col-my-2";
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
}

// Creamos un array para imprimir el contenido inicial
// let contenidoInicial = [];

// creamos el reloj -> 1:59:22
// const DataTime = luxom.DateTime
// setInterval(()=>{
//   let fechaAhora=DateTime.now();
//   fechaDiv.innerHTML=
// })
