//Voy a simular un sistema de inventario/gestión de biblioteca simple

class Libro{
  constructor(titulo,autor,fechaPublicacion,genero){
    this.titulo = titulo;
    this.autor = autor;
    this.fechaPublicacion = fechaPublicacion;
    this.genero = genero;
  }
  //Se va poder mostrar la información del libro
  mostrarInfo() {
    console.log("El libro seleccionado es "+this.titulo
      +", escrito por " +this.autor +", publicado el año "
      +this.fechaPublicacion +" y su género es "+this.genero);
  }
}

class Biblioteca{
  constructor(nombre){
    this.nombre = nombre; // nombre de la biblioteca
    this.libros = []; // aquí guardaré los libros de la colección de la biblioteca
  }
  //Un método para agregar un nuevo libro a la biblioteca
  agregarLibro(libroNuevo){
    this.libros.push(libroNuevo);
    console.log("El libro "+libroNuevo.titulo+" ha sido añadido exitosamente a la biblioteca "+this.nombre);
  }

  //método para buscar libro por el título
  // esto se hará directamente desde el documento luego veré cómo hacer para ingresar los datos por consola
  buscarPorTitulo(tituloABuscar){
    //aquí se buscará el libro 
    const resultados = this.libros.filter(libro => libro.titulo.toLowerCase().includes(tituloABuscar.toLowerCase()));
    if (resultados.length > 0) {
      console.log("Libros encontrados con el título" +tituloABuscar+" :");
      resultados.forEach(libro => libro.mostrarInfo());
    } else {
      console.log("No se encontraron libros con el título "+titulo+".");
    }
  }
  
  //Método para buscar por género
  mostrarPorGenero(genero) {
    const librosGenero = this.libros.filter(libro => libro.genero.toLowerCase() === genero.toLowerCase());
    if (librosGenero.length > 0) {
      console.log("Libros de género "+genero+":");
      librosGenero.forEach(libro => libro.mostrarInfo());
    }
    else{
      console.log("No se encontraron libros del género "+genero);
    }
  }
  

  //Método para mostrar todos los libros que están en la biblioteca
  mostrarInventario(){
    if(this.libros.length > 0){
      console.log("Libros en la biblioteca "+this.nombre+":");
      this.libros.forEach(libro => libro.mostrarInfo());
    }
    else{
      console.log("No hay libros en la biblioteca "+this.nombre+".");
    }
  }
}
//Para probar 
const libro1 = new Libro("Holaaa","Kevin Ramos",2024,"NADA");
const libro2 = new Libro("Introducción a Python","Pepito Perez",2010,"Académico");
const libro3 = new Libro("Felicidad y tristeza","Triste tristona",1999,"Reflexivo");
const libro4 = new Libro("Cien años de soledad","Gabriel García Marquez",2024,"Realismo");
const libro5 = new Libro("Rebelión en la granja","George Orwell",1954,"Distopía");
const libro6 = new Libro("El principito","Antoine de Saint-Exupéry",1943,"Fabula");
libro1.mostrarInfo();

const biblioteca1 = new Biblioteca("Textos increíbles");

biblioteca1.agregarLibro(libro1);
biblioteca1.agregarLibro(libro2);
biblioteca1.agregarLibro(libro3);
biblioteca1.agregarLibro(libro4);
biblioteca1.agregarLibro(libro5);
biblioteca1.agregarLibro(libro6);
 
//Mostramos todo el inventario
biblioteca1.mostrarInventario();

//Buscamos por titulo
biblioteca1.buscarPorTitulo("Felicidad y tristeza");

//Buscamos por genero
biblioteca1.mostrarPorGenero("Distopía");