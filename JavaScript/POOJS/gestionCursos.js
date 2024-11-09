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

  inscribirse(curso) {
    if (!this.cursosInscritos.includes(curso)) {
      this.cursosInscritos.push(curso);
      curso.agregarEstudiante(this);
      console.log(`${this.nombre} se ha inscrito en el curso ${curso.nombre}.`);
    } else {
      console.log(`${this.nombre} ya está inscrito en el curso ${curso.nombre}.`);
    }
  }

  
}