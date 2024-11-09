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
      console.log(this.nombre, "se ha inscrito en el curso ",curso.nombre);
    } else {
      console.log(this.nombre, "ya está inscrito en el curso ",curso.nombre);
    }
  }
 inscribirse(curso) {
    if (!this.cursosInscritos.includes(curso)) {
      this.cursosInscritos.push(curso);
      curso.agregarEstudiante(this);
      console.log(this.nombre, "se ha inscrito en el curso ",curso.nombre);
    } else {
      console.log(this.nombre,"ya está inscrito en el curso ",curso.nombre);
    }
  }
  verLecciones(curso) {
    if (this.cursosInscritos.includes(curso)) {
      console.log("Lecciones del curso ",curso.nombre);
      curso.mostrarContenido();
    } else {
      console.log(this.nombre, "no está inscrito en este curso.");
    }
  }
}

// Clase Profesor que hereda de Usuario
class Profesor extends Usuario {
  constructor(nombre, email) {
    super(nombre, email);
    this.cursosCreados = [];
  }

  crearCurso(nombre, descripcion) {
    const nuevoCurso = new Curso(nombre, descripcion, this);
    this.cursosCreados.push(nuevoCurso);
    console.log("Curso ",nombre, "creado por el profesor ",this.nombre);
    return nuevoCurso;
  }
}


// Clase Curso
class Curso {
  constructor(nombre, descripcion, profesor) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.profesor = profesor;
    this.estudiantes = [];
    this.modulos = [];
  }
  agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
  }

  agregarModulo(modulo) {
    this.modulos.push(modulo);
    console.log("Módulo ",modulo.nombre," agregado al curso ",this.nombre);
  }
}