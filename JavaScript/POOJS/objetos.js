//Objeto persona
let person = {
  nombre: "Kevin",
  apellido: "Ramos",
  email: "kera22@gmail.com",
  edad: 21,
  //Método para imprimir el nombre completo
  nombreCompleto: function(){
    return this.nombre + " " + this.apellido;
  }
}
//Se llama la función 
console.log(person.nombreCompleto())


//Ejercicio de libro jasjasj vamo a ver qué sale

//Defino el libro
let libro = {
  titulo: "JavaScript para principiantes",
  autor: "Juan Pérez",
  anioPublicacion: 2024,
  generos: ["Programación", "Tecnología", "Educación"],
  disponibilidad: true,

   // Método para mostrar la información completa del libro
   mostrarInfo: function() {
    console.log("Título: " + this.titulo);
    console.log("Autor: " + this.autor);
    console.log("Año de publicación: " + this.anioPublicacion);
    console.log("Géneros: " + this.generos.join(", "));
    console.log("Disponibilidad: " + (this.disponibilidad ? "Disponible" : "No disponible"));
  }
  
}
//Para ver si se imprime lo que debe
libro.mostrarInfo();