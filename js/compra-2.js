// SECCION BUSCADOR
// Creamos evento para seleccionar categoría en el buscador
let buscarBtn = document.getElementById("buscarBtn");

buscarBtn.onclick = () => {
  (async () => {
    const { value: producto } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        Productos: {
          rango1: "Menores a $800",
          rango2: "Entre $800 y $1200",
          rango3: "Mayores a $1500",
        },
      },
      inputPlaceholder: "Selecciona una categoría",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve();
            console.log(value);
          }
        });
      },
    });

    if (producto === "rango1") {
      Swal.fire(`Seleccionaste: Menores a $800`);
    }
    if (producto === "rango2") {
      Swal.fire(`Seleccionaste: Entre $800 y $1200`);
    }
    if (producto === "rango3") {
      Swal.fire(`Seleccionaste: Mayores a $1500`);
    }
  })();
};

// SECCIÓN SLIDE LATERAL IZQUIERDO
// Creamos el array para almaecenar los productos nuevos
let almacenProductosPersonalizados = [];
// Se crea funcion para crear objetos "Crear Producto"
function crearProducto(id, nombre, precio, imagen, categoria) {
  (this.id = id),
    (this.nombre = nombre),
    (this.precio = precio),
    (this.imagen = imagen),
    (this.categoria = categoria);
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

// if (localStorage.getItem("prueba")) {
//   console.log("ya existe");
// } else {
//   localStorage.setItem("prueba", true);
// }
// localStorage.setItem("categoria", "../json/general.json");

// if (localStorage.getItem("categoria")) {
//   console.log("existe categoria en Storage");
// } else {
//   localStorage.setItem("categoria", "../json/general.json");
// }
// Codicionamos el Storage para que se nos carge una vista preliminar
// if (localStorage.getItem("contenidoPrincipal")) {
//   console.log("seteando json");
// } else {
//   imprimirProductos("../json/general.json");
//   console.log("creando json storage");
// }

// localStorage.getItem("contenidoPrincipal")
//   ? console.log("seteando json")
//   : imprimirProductos("../json/general.json");

if (localStorage.getItem("contenidoPrincipal")) {
  console.log("ya existe");
} else {
  fetch("../json/general.json")
    .then((res) => res.json())
    .then((info) => {
      info.forEach((productos) => {
        productosPrincipales.push(productos);
      });

      // Convertir el array a una cadena JSON y guardarla en el localStorage
      localStorage.clear("contenidoPrincipal");
      localStorage.setItem(
        "contenidoPrincipal",
        JSON.stringify(productosPrincipales)
      );
      mostrarProductos(productosPrincipales);
    });
}

// creamos funcion para mostrar productos en la sección principal
function mostrarProductos(array) {
  let contenedorProductos = document.getElementById("contenedorProductos");
  contenedorProductos.innerHTML = ``;

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

function selccionarCategoria(categoria) {
  productosPrincipales = [];
  fetch(categoria)
    .then((res) => res.json())
    .then((info) => {
      info.forEach((productos) => {
        productosPrincipales.push(productos);
      });

      // Convertir el array a una cadena JSON y guardarla en el localStorage
      localStorage.clear("contenidoPrincipal");
      localStorage.setItem(
        "contenidoPrincipal",
        JSON.stringify(productosPrincipales)
      );
      mostrarProductos(productosPrincipales);
    })
    .catch((error) => {
      console.error("Error al cargar el JSON: " + error);
    });
}

// Eventos para cambiar el localStorage
let calzadoBtn = document.getElementById("calzadoBtn");
calzadoBtn.onclick = () => {
  localStorage.clear("contenidoPrincipal");
  selccionarCategoria("../json/calzado.json");
  // localStorage.setItem("categoria", "../json/calzado.json");
  // selccionarCategoria(JSON.stringify(localStorage.getItem("categoria")));
};

let playerasBtn = document.getElementById("playerasBtn");
playerasBtn.onclick = () => {
  localStorage.clear("contenidoPrincipal");
  selccionarCategoria("../json/playeras.json");
  // localStorage.setItem("categoria", "../json/playeras.json");
};

let sudaderasBtn = document.getElementById("sudaderasBtn");
sudaderasBtn.onclick = () => {
  localStorage.clear("contenidoPrincipal");
  selccionarCategoria("../json/sudaderas.json");
  // localStorage.setItem("categoria", "../json/sudaderas.json");
};

let shortsBtn = document.getElementById("shortsBtn");
shortsBtn.onclick = () => {
  localStorage.clear("contenidoPrincipal");
  selccionarCategoria("../json/shorts.json");
  // localStorage.setItem("categoria", "../json/shorts.json");
};

//FUNCIONES EN GENERAL
function filtrar(dataBuscada) {
  almacenStorage = localStorage.getItem("contenidoPrincipal");
  productosLocalStorage = JSON.parse(almacenStorage);

  let productosFiltrados = productosLocalStorage.filter((data) => {
    return data.nombre.toLowerCase().includes(dataBuscada);
  });
  mostrarProductos(productosFiltrados);
  console.log(productosFiltrados);
}

// Hacemos una función para el tecleo del usuario en la busqueda
function busquedaProducto() {
  let busquedaInput = document.getElementById("busquedaInput");
  busquedaInput.onkeydown = () => {
    filtrar(busquedaInput.value);
    console.log(busquedaInput.value);
  };
}

busquedaProducto();

// function imprimirProductos(apiJson) {
//   fetch(apiJson)
//     .then((resultado) => {
//       return resultado.json();
//     })
//     .then((info) => {
//       localStorage.setItem("contenidoPrincipal", JSON.stringify(info));
//       mostrarProductos(info);
//     });
// }

// Creamos un array para imprimir el contenido inicial
// let contenidoInicial = [];

// creamos el reloj -> 1:59:22
// const DataTime = luxom.DateTime
// setInterval(()=>{
//   let fechaAhora=DateTime.now();
//   fechaDiv.innerHTML=
// // })
// console.log(JSON.parse(localStorage.getItem("contenidoPrincipal")));
