class Producto {

    constructor(marca, nombre, precio,descripcion, id, img, cantidad ) {
      
      this.marca = marca;
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion;
      this.id = id;
      this.img = img;
      this.cantidad = cantidad;
    }
  };
  
  let producto1 = new Producto (  'RAQUETA WILSON', 'STORM', 21500 , 'con tension extrema para lograr sacar el máximo de potencia', 1 , '../imagenes/raqueta de tenis.webp', 1 );

  let producto2 =new Producto ( 'RAQUETA HEAD', 'RADICAL', 25360 , 'para jugadores que disfrutan el ataque y los golpes agresivos', 2 , '../imagenes/raqueta head.webp', 1 );

  let producto3 = new Producto ( 'RAQUETA PRINCE' , 'STYLE' , 32700 , 'la medida justa entre potencia y control, para jugadores polivalentes' , 3 , '../imagenes/raqueta de tenis prince.webp', 1 );

  let producto4 = new Producto ( 'RAQUETA DUNLOP', 'DARK' , 45400 , 'Ideal para jugadores que inician y necesitan una raqueta que acompañe los golpes más duros', 4 , '../imagenes/raqueta dunlop.webp', 1 );

  let producto5 = new Producto ( 'RAQUETA BABOLAT' , 'BOOST' , 128394 , 'para jugadores que buscan la potencia por sobre el control, definiendo en cada punto' , 5 , '../imagenes/raqueta babolat boost.webp',1 );

  let producto6 = new Producto ( 'RAQUETA BABOLAT' , 'PURE STRIKE' , 102348 , 'raqueta que da ese extra necesario para lograr el contraataque perfecto, solo para hábiles', 6 , '../imagenes/raqueta babolat pure strike.webp', 1 );

  let producto7 = new Producto ( 'RAQUETA WILSON' , 'ULTRA' , 110209 , 'una raqueta pensada para la defensa, ideal para los jugadores que corren todo y siempre buscan un punto más' , 7 , '../imagenes/raqueta wilson ultra.webp', 1 );

  let producto8 = new Producto ( 'RAQUETA DUNLOP', 'SX TEAM' , 87527 , 'gracias a su marco tubular "dg sistem" acompaña en los golpres y suaviza los dolores tanto en codo como en hombro' , 8 , '../imagenes/raqueta dunlop sx team.webp', 1 );

  let producto9 = new Producto ( 'RAQUETA PRINCE' , 'WARRIOR' , 99120 , 'Para jugadores agresivos en cada parte de la cancha, que no dejan una pelota por perdida, competidores natos' , 9 , '../imagenes/raqueta prince warrior.webp', 1);
  
  const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7,producto8,producto9];













