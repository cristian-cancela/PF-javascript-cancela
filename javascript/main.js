let contenedorDeProductos = document.getElementById('contenido-de-productos');

for (const producto of productos) {

  let div = document.createElement('div');

  div.className = 'col';

  div.innerHTML = `
             
          <div class="card" style="width: 18rem;">

              <img src="${producto.img}" class="card-img-top" alt="${producto.marca} ${producto.nombre}">
              
              <div class="card-body">

                  <h5 class="card-title">${producto.marca}</h5>
                 
                  <p>"${producto.nombre}"</p>

                  <p class="card-text">${producto.descripcion}</p>

                  <p>Precio: $${producto.precio}</p>
                  
                  <button id = "${producto.id}" class="btn btn-primary">¡LO QUIERO!</button>
             </div>
          </div>
         

      `;
  contenedorDeProductos.querySelector('.row').appendChild(div);
}





//   ---------------barra de busqueda----------------


const searchInput = document.getElementById('searchInput');

const productList = document.getElementById('productList');

const noResultsMessage = document.getElementById('noResultsMessage');

searchInput.addEventListener('input', handleSearch);

function handleSearch() {

  const searchTerm = searchInput.value.toLowerCase();

  const filteredProducts = productos.filter(producto => {

    const productInfo = `${producto.marca} ${producto.nombre} ${producto.descripcion}`.toLowerCase();

    return productInfo.includes(searchTerm);

  });

  renderProducts(filteredProducts);
  
}

function renderProducts(products) {

  productList.innerHTML = '';

  noResultsMessage.style.display = 'none';

  if (searchInput.value.trim() === '') {

    return; // No mostrar nada si el campo de búsqueda está vacío

  }

  if (products.length === 0) {

    noResultsMessage.style.display = 'block';

  } else {

    products.forEach(producto => {

      const listItem = document.createElement('li');

      listItem.textContent = `${producto.marca} ${producto.nombre} - Precio: $${producto.precio}`;

      productList.appendChild(listItem);

    });
  }
}



