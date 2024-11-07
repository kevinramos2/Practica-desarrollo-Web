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

}
//Para probar 
const libro1 = new Libro("Holaaa","Kevin Ramos",2024,"NADA");

libro1.mostrarInfo();