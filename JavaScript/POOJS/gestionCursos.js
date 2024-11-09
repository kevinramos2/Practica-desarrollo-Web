class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

// Clase Estudiante que hereda de Usuario
class Estudiante extends Usuario {
  constructor(nombre, email) {
    super(nombre, email);
    this.cursosInscritos = [];
  }
  
}