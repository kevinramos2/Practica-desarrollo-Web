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

  mostrarContenido() {
    this.modulos.forEach((modulo, index) => {
      console.log("Módulo ",index + 1,": ", modulo.nombre);
      modulo.lecciones.forEach((leccion, idx) => {
        console.log("Lección ",idx + 1,": ", leccion.titulo);
      });
    });
  }
}

// Clase Modulo
class Modulo {
  constructor(nombre) {
    this.nombre = nombre;
    this.lecciones = [];
  }
  agregarLeccion(leccion) {
    this.lecciones.push(leccion);
  }
}

// Clase Leccion
class Leccion {
  constructor(titulo, contenido) {
    this.titulo = titulo;
    this.contenido = contenido;
  }

  verContenido() {
    console.log(`Lección: ${this.titulo}`);
    console.log(this.contenido);
  }
}

//Aquí irá la prueba de ejecución

// Crear instancias de Profesor y Estudiante
const profesor1 = new Profesor("Dr. Juan", "juan@ejemplo.com");
const estudiante1 = new Estudiante("Maria", "maria@ejemplo.com");


// El profesor crea un curso
const curso1 = profesor1.crearCurso("JavaScript Avanzado", "Curso para desarrolladores avanzados en JS.");

// Crear módulos y lecciones para el curso
const modulo1 = new Modulo("Introducción a JavaScript Avanzado");
const leccion1 = new Leccion("Scope y Closures", "Explicación detallada sobre scope y closures en JavaScript.");
const leccion2 = new Leccion("Promesas y Async/Await", "Cómo manejar operaciones asíncronas en JavaScript.");


// Agregar lecciones al módulo
modulo1.agregarLeccion(leccion1);
modulo1.agregarLeccion(leccion2);

// Agregar el módulo al curso
curso1.agregarModulo(modulo1);

// El estudiante se inscribe en el curso
estudiante1.inscribirse(curso1);

// El estudiante ve el contenido del curso
estudiante1.verLecciones(curso1);