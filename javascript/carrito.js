
// previamente se le asigno un valor constante a "carrito", luego se modifica a let para poder reutilizar dicha variable

let carrito = obtenerCarritoLocalStorage();

let botones = document.getElementsByClassName('btn');

for (const boton of botones) {

  boton.onclick = (e) => {

    const idProductoSeleccionado = parseInt(e.target.id);
    
    let productoSeleccionado = productos.find((producto) => producto.id === idProductoSeleccionado);
    
    const productoEnCarrito = carrito.find((producto) => producto.id === idProductoSeleccionado);
    
    productoEnCarrito ? productoEnCarrito.cantidad++ : carrito.push({ ...productoSeleccionado, cantidad: 1 });
    
    // contador que figura en el boton carrito----
    
    carritoCounter();
    
    // ---- para pasar el texto a minúscula-----

    const marca = productoSeleccionado.marca.toLowerCase();
    const nombre = productoSeleccionado.nombre.toLowerCase();
    
    swal("¡Gran compra!", `La ${marca} ${nombre} te espera en tu carrito`, "success");

    // Guardar el carrito en el LocalStorage después de cada modificación
    
    guardarEnLocalStorage();
  };
}

// ---armado de modal------

let botonCarrito = document.getElementById('boton-carrito');

const modalContainer = document.getElementById('modal-container');

const pintarCarrito = () => {

    modalContainer.innerHTML = "";
    
  modalContainer.style.display = "flex";

const modalHeader = document.createElement('div')

modalHeader.className = 'modal-header';

modalHeader.innerHTML = `

<h1 class = "modal-header-title"> tus compras</h1>
`;
modalContainer.append(modalHeader)

// -------boton para cerrar el modal------

const modalButton = document.createElement("h1");

modalButton.innerText = 'x';

modalButton.className = "modal-header-button";

modalButton.addEventListener ('click' , () => {
 
modalContainer.style.display = "none"  


})

modalHeader.append(modalButton);

// -----contenido del modal------------

carrito.forEach((product) => {
  
  let carritoContent = document.createElement('div');
  
  carritoContent.className = "modal-content";
  
  carritoContent.innerHTML = `

  <img src = "${product.img}">

  <p> ${product.marca} </p>

  <p> "${product.nombre}" </p>

  <p> $${product.precio}</p>

  <button id="restar" class= "restar"><i class="fa-solid fa-minus"></i></button> 
  
  <p> cantidad: ${product.cantidad} </p>
  
  <button id= "sumar" class= "sumar"><i class="fa-solid fa-plus"></i></button> 

  <button id= "eliminar" class= "eliminar"><i class="fa-solid fa-trash"></i></button> 

  <p> total: $ ${product.cantidad * product.precio} </p>

  `;

  modalContainer.append(carritoContent)

  // botones de sumar y restar dentro del modal-----------

  let restar = carritoContent.querySelector('#restar');

  restar.addEventListener("click", () => {

    if(product.cantidad !==1) {

      
      product.cantidad --;
      
      pintarCarrito();

    // para que las cantidades no se modifiquen cuando se recargue la pagina, es importante guardar los cambios en el localstorage

      guardarEnLocalStorage();
      
    }
    } )

    let sumar = carritoContent.querySelector('#sumar');

  sumar.addEventListener("click", () => {

  product.cantidad ++;

  pintarCarrito();

  guardarEnLocalStorage();

  })


//   introduzco el boton de eliminar producto------

let eliminar = carritoContent.querySelector('#eliminar');

carritoContent.append(eliminar);

eliminar.addEventListener ("click",eliminarProducto);

});


// -------total del carrito------

const total = carrito.reduce((acc,el)=> acc + el.precio * el.cantidad, 0 );

const totalBuying = document.createElement ('div')

totalBuying.className = "total-content"

totalBuying.innerHTML = `total a pagar: $ ${total} `;

const realizarCompraButton = document.createElement("button");

realizarCompraButton.className = "comprar";

realizarCompraButton.innerHTML = '<i class="fa-regular fa-thumbs-up"></i> Realizar compra';

realizarCompraButton.addEventListener("click", () => {
  if (carrito.length === 0) {
    // Muestra un SweetAlert indicando que el carrito está vacío
    Swal.fire({
      icon: "error",
      title: "¡Carrito vacío!",
      text: "No puedes realizar la compra porque tu carrito está vacío.",
    });
  } else {
    localStorage.removeItem('carrito');
    carrito = [];
    carritoCounter();
    modalContainer.innerHTML = ""; // Limpia el contenido del modal
    modalContainer.style.display = "none";

    // Muestra un SweetAlert de felicitaciones por la compra
    Swal.fire({
      icon: "success",
      title: "¡Felicitaciones por tu compra!",
      text: "Gracias por tu compra. ¡Disfruta tus productos!",
    });
  }
});

modalContainer.append(realizarCompraButton);

modalContainer.append(totalBuying);

}
// eliminar producto del carrito------

botonCarrito.addEventListener('click', pintarCarrito)

const eliminarProducto = () =>{

    const foundId = carrito.find((element) => element.id)

    carrito = carrito.filter((carritoId) => {
        
        return carritoId !== foundId;

      
      } )
      
      carritoCounter();

      guardarEnLocalStorage();

      pintarCarrito();


}

// --------cantidades en el boton carrito, guardo las cantidades en el local storage para evitar que, cuando el usario recargue la pagina, el contador vuelva a cero---------

const cantidadCarrito = document.getElementById('cantidadCarrito');

const carritoLength = carrito.length;

localStorage.setItem('carritoLength', JSON.stringify(carritoLength))

const carritoCounter = () => {

  const carritoLength = carrito.length; 

  cantidadCarrito.style.display = 'block';

  cantidadCarrito.innerText = carritoLength; 
}



// ------introduzco la funcion obtener carrito del local storage------

function obtenerCarritoLocalStorage() {
  
  const carritoGuardado = localStorage.getItem('carrito');

  return carritoGuardado ? JSON.parse(carritoGuardado) : [];


}


function guardarEnLocalStorage() {
  
  localStorage.setItem('carrito', JSON.stringify(carrito));
  
}

carritoCounter();

