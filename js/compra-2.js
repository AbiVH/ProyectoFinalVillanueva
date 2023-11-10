// SECCION BUSCADOR
// Creamos una función para actualizar el reloj
function actualizarReloj() {
  const DateTime = luxon.DateTime.now();
  let contenedorReloj = document.getElementById("contenedorReloj");
  contenedorReloj.innerHTML = `${DateTime.c.hour}:${DateTime.c.minute}:${DateTime.c.second}`;
}

// Llamamos a la función inicialmente después de 1 segundo
setTimeout(() => {
  actualizarReloj();

  // Configuramos el intervalo para que se ejecute cada segundo
  setInterval(() => {
    actualizarReloj();
  }, 1000);
}, 1000);

// SEECIÓN CONTENIDO
// declaramos array de los productos que se verán en la sección principal
let productosPrincipales = [];
let productosCarrito = [];

function setearPrincipal() {
  if (localStorage.getItem("contenidoPrincipal")) {
    console.log("ya existe");
    mostrarProductos(JSON.parse(localStorage.getItem("contenidoPrincipal")));
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
}

setearPrincipal();

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
        <button id="btn-producto${producto.id}" class="overlay-button">COMPRAR</button>
      </div>
      <br>`;
    contenedorProductos.appendChild(agregarImpresionProducto);

    //CREAMOS EVENTOS CON LOS BOTONES PARA LA COMPRA DE CADA PRODUCTO

    let compraBtn = document.getElementById(`btn-producto${producto.id}`);
    compraBtn.onclick = () => {
      let productoRepetido = productosCarrito.find(
        (productoEnCarrito) => productoEnCarrito.id === producto.id
      );

      if (productoRepetido) {
        alert(`El producto ya ha sido añadido, seleccione otro producto`);
      } else {
        productosCarrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(productosCarrito));
        mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
      }
    };
  });
}

// creamos funcion para mostrar productos en el carrito
function mostrarCarrito(array) {
  let contenedorCarrito = document.getElementById("mostrarCarrito");
  contenedorCarrito.innerHTML = ``;

  array.forEach((producto) => {
    let agregarImpresionProducto = document.createElement("div");
    agregarImpresionProducto.innerHTML = `<div id="${producto.id}" style="text-align: center">
        <img src="../assets/${producto.imagen}" alt="" style="width: 18rem" ; />
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
      </div>
      <br>`;
    contenedorCarrito.appendChild(agregarImpresionProducto);
  });
}

//CREAMOS EVENTO PARA FINALIZAR COMPRA
let finalizaCompra = document.getElementById("finalizaCompra");
finalizaCompra.onclick = () => {
  localStorage.clear("carrito");
  productosCarrito = [];
  let contenedorCarrito = document.getElementById("mostrarCarrito");
  contenedorCarrito.innerHTML = ``;
  setearPrincipal();
  storageFuncion();
};

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
let generalBtn = document.getElementById("generalBtn");
generalBtn.onclick = () => {
  localStorage.clear("contenidoPrincipal");
  selccionarCategoria("../json/general.json");
};

let calzadoBtn = document.getElementById("calzadoBtn");
calzadoBtn.onclick = () => {
  localStorage.clear("contenidoPrincipal");
  selccionarCategoria("../json/calzado.json");
};

let playerasBtn = document.getElementById("playerasBtn");
playerasBtn.onclick = () => {
  localStorage.clear("contenidoPrincipal");
  selccionarCategoria("../json/playeras.json");
};

let sudaderasBtn = document.getElementById("sudaderasBtn");
sudaderasBtn.onclick = () => {
  localStorage.clear("contenidoPrincipal");
  selccionarCategoria("../json/sudaderas.json");
};

let shortsBtn = document.getElementById("shortsBtn");
shortsBtn.onclick = () => {
  localStorage.clear("contenidoPrincipal");
  selccionarCategoria("../json/shorts.json");
};

//FUNCIONES EN GENERAL
function filtrar(dataBuscada) {
  almacenStorage = localStorage.getItem("contenidoPrincipal");
  productosLocalStorage = JSON.parse(almacenStorage);

  let productosFiltrados = productosLocalStorage.filter((data) => {
    return data.nombre.toLowerCase().includes(dataBuscada.toLowerCase());
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

// STORAGE
function storageFuncion() {
  //DARK MODE
  btnDarkMode = document.getElementById("logoDark");
  if (localStorage.getItem("DarkMode")) {
    // si existe
  } else {
    localStorage.setItem("DarkMode", "false");
  }

  if (localStorage.getItem("DarkMode") == "true") {
    document.body.classList.toggle("darkModeBody");
    document.getElementById("primerNav").classList.toggle("darkModeNav1");
    document.getElementById("segundoNav").classList.toggle("darkModeNav2");
    document.getElementById("carritoDark").classList.toggle("darkModeNav1");
    document.getElementById("logoCarritoDark").classList.toggle("darkModeNav2");

    btnDarkMode.innerHTML = "Light";
  }

  btnDarkMode.addEventListener("click", darkMode);
  function darkMode() {
    console.log("Funciona");
    document.body.classList.toggle("darkModeBody");
    document.getElementById("primerNav").classList.toggle("darkModeNav1");
    document.getElementById("segundoNav").classList.toggle("darkModeNav2");
    document.getElementById("carritoDark").classList.toggle("darkModeNav1");
    document.getElementById("logoCarritoDark").classList.toggle("darkModeNav2");

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

  // SETEAR CARRITO
  if (localStorage.getItem("carrito")) {
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    // si existe
  } else {
    localStorage.setItem("carrito", "");
  }
}
