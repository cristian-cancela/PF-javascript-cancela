async function obtenerNoticias() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 

        const data = await response.json(); 

        return data;

    } catch (error) {

        console.error('Error al obtener noticias:', error);
    }
}

async function mostrarNoticias() {

    try {

        const spinner = document.getElementById('spinner');

        spinner.style.display = 'block'; 

        const posts = await obtenerNoticias();

        
        setTimeout(() => {

            spinner.style.display = 'none'; 

            const contenedor2 = document.createElement('div');

            contenedor2.className = 'container'; 

            let row = document.createElement('div');

            row.className = 'row'; 

            let cardsInRow = 0; // Para controlar cuántas tarjetas hay en cada fila

            for (const post of posts) { 
                const col = document.createElement('div');

                col.className = 'col-md-6'; // Tarjetas ocuparán la mitad del ancho

                col.innerHTML = `

                    <div class="card card-body my-3">

                        <h4>${post.title}</h4> 

                        <p>${post.body}</p>

                    </div>
                `;

                row.appendChild(col);

                cardsInRow++;

                if (cardsInRow === 2) {
                    
                    contenedor2.appendChild(row);

                    
                    row = document.createElement('div');

                    row.className = 'row';

                    cardsInRow = 0; 
                }
            }

            if (cardsInRow > 0) {

                contenedor2.appendChild(row);
            }

            document.body.appendChild(contenedor2);

        }, 2000); 

    } catch (error) {
        
        console.error('Error al mostrar noticias:', error);
    }
}

mostrarNoticias();