const ramos = [
  { id: 1, nombre: "Introducción a las Ciencias Veterinarias", semestre: 1, prereqs: [] },
  { id: 2, nombre: "Fundamentos de la Química", semestre: 1, prereqs: [] },
  { id: 3, nombre: "Biología Celular y Molecular", semestre: 1, prereqs: [] },
  { id: 4, nombre: "Matemática", semestre: 1, prereqs: [] },
  { id: 5, nombre: "Zoología", semestre: 1, prereqs: [] },
  { id: 6, nombre: "Fundamentos de la Física", semestre: 1, prereqs: [] },
  { id: 7, nombre: "Anatomía Animal I", semestre: 2, prereqs: [5] },
  { id: 8, nombre: "Praderas y Especies Forrajeras", semestre: 2, prereqs: [3] },
  { id: 9, nombre: "Fundamentos de Bioquímica", semestre: 2, prereqs: [2] },
  { id: 10, nombre: "Histoembriología Veterinaria", semestre: 2, prereqs: [3] },
  { id: 11, nombre: "Ecología", semestre: 2, prereqs: [4, 5] },
  { id: 12, nombre: "Electivo 1", semestre: 2, prereqs: [] },
  { id: 13, nombre: "Anatomía Animal II", semestre: 3, prereqs: [7] },
  { id: 14, nombre: "Nutrición y Alimentación Animal", semestre: 3, prereqs: [8, 9] },
  { id: 15, nombre: "Fisiología Veterinaria", semestre: 3, prereqs: [9, 10] },
  { id: 16, nombre: "Práctica Inicial", semestre: 3, prereqs: [7, 11] },
  { id: 17, nombre: "Inmunología General", semestre: 3, prereqs: [3, 9] },
  { id: 18, nombre: "Bioestadística", semestre: 3, prereqs: [4] },
  { id: 19, nombre: "Electivo 2", semestre: 3, prereqs: [] },
  { id: 20, nombre: "Etología y Bienestar Animal", semestre: 4, prereqs: [15] },
  { id: 21, nombre: "Histopatología", semestre: 4, prereqs: [15] },
  { id: 22, nombre: "Microbiología Veterinaria", semestre: 4, prereqs: [17] },
  { id: 23, nombre: "Conservación de Fauna Silvestre", semestre: 4, prereqs: [11] },
  { id: 24, nombre: "Métodos de Investigación en Salud", semestre: 4, prereqs: [18] },
  { id: 25, nombre: "Electivo 3", semestre: 4, prereqs: [] },
  { id: 26, nombre: "Genética en Ciencias Veterinarias", semestre: 5, prereqs: [18] },
  { id: 27, nombre: "Epidemiología Veterinaria", semestre: 5, prereqs: [24] },
  { id: 28, nombre: "Fisiopatología Veterinaria", semestre: 5, prereqs: [13, 21] },
  { id: 29, nombre: "Gestión Ambiental y Desarrollo Sustentable", semestre: 5, prereqs: [23] },
  { id: 30, nombre: "Gestión Contable y Financiera", semestre: 5, prereqs: [18] },
  { id: 31, nombre: "Electivo 4", semestre: 5, prereqs: [] },
  { id: 32, nombre: "Semiología veterinaria", semestre: 6, prereqs: [20, 28] },
  { id: 33, nombre: "Reproducción animal", semestre: 6, prereqs: [15] },
  { id: 34, nombre: "Anatomía Patológica", semestre: 6, prereqs: [28] },
  { id: 35, nombre: "Microbiología de los Alimentos", semestre: 6, prereqs: [22, 24] },
  { id: 36, nombre: "Práctica Intermedia", semestre: 6, prereqs: [16, 20] },
  { id: 37, nombre: "Fundamentos del ecosistema de Salud digital (Electivo 5)", semestre: 6, prereqs: [] },
  { id: 38, nombre: "Sistemas de Producción Animal", semestre: 7, prereqs: [14, 26] },
  { id: 39, nombre: "Farmacología Veterinaria", semestre: 7, prereqs: [28] },
  { id: 40, nombre: "Enfermedades por agentes biológicos I", semestre: 7, prereqs: [27, 35] },
  { id: 41, nombre: "Procedimientos clínicos", semestre: 7, prereqs: [32] },
  { id: 42, nombre: "Imagenología", semestre: 7, prereqs: [34] },
  { id: 43, nombre: "Inteligencia artificial aplicada a la salud", semestre: 7, prereqs: [18] },
  { id: 44, nombre: "Laboratorio clínico y biotecnología", semestre: 8, prereqs: [34, 40] },
  { id: 45, nombre: "Investigación en Ciencias Veterinarias", semestre: 8, prereqs: [24, 39] },
  { id: 46, nombre: "Enfermedades por agentes biológicos II", semestre: 8, prereqs: [40] },
  { id: 47, nombre: "Principios de cirugía y anestesiología", semestre: 8, prereqs: [39, 41] },
  { id: 48, nombre: "Medicina interna", semestre: 8, prereqs: [32, 42] },
  { id: 49, nombre: "Bioética", semestre: 8, prereqs: [] },
  { id: 50, nombre: "Salud Pública Veterinaria", semestre: 9, prereqs: [46] },
  { id: 51, nombre: "Unidad de Investigación I", semestre: 9, prereqs: [45, 49] },
  { id: 52, nombre: "Internado de Pequeños Animales I", semestre: 9, prereqs: [44, 47, 48] },
  { id: 53, nombre: "Internado de Animales Mayores I", semestre: 9, prereqs: [44, 47, 48] },
  { id: 54, nombre: "Formulación y Evaluación de Proyectos Veterinarios", semestre: 9, prereqs: [30, 38] },
  { id: 55, nombre: "Gestión Veterinaria", semestre: 9, prereqs: [30, 38] },
  { id: 56, nombre: "Práctica Profesional", semestre: 9, prereqs: [] }, // requiere licenciatura
  { id: 57, nombre: "Una Salud", semestre: 10, prereqs: [50, 54] },
  { id: 58, nombre: "Unidad de Investigación II", semestre: 10, prereqs: [51] },
  { id: 59, nombre: "Internado Electivo: Pequeños Animales II", semestre: 10, prereqs: [] },
  { id: 60, nombre: "Internado Electivo: Animales Mayores II", semestre: 10, prereqs: [] },
  { id: 61, nombre: "Internado Electivo: Conservación, Biodiversidad y Medio Ambiente", semestre: 10, prereqs: [] },
  { id: 62, nombre: "Internado Electivo: Producción y Sistemas de Aseguramiento de la Calidad", semestre: 10, prereqs: [] },
  { id: 63, nombre: "Orientación Laboral y Responsabilidad Ética", semestre: 10, prereqs: [36] }
];

// Cargar estado desde localStorage
const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estado));
}

function crearMalla() {
  const malla = document.getElementById("malla");
  const maxSemestre = Math.max(...ramos.map(r => r.semestre));

  for (let i = 1; i <= maxSemestre; i++) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${i}`;
    columna.appendChild(titulo);

    ramos.filter(r => r.semestre === i).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.dataset.id = ramo.id;

      if (estado[ramo.id]) {
        div.classList.add("aprobado");
      }

      div.addEventListener("click", () => manejarClick(ramo, div));
      columna.appendChild(div);
    });

    malla.appendChild(columna);
  }
}

function manejarClick(ramo, div) {
  if (estado[ramo.id]) {
    delete estado[ramo.id];
    div.classList.remove("aprobado");
  } else {
    const faltan = ramo.prereqs.filter(pr => !estado[pr]);
    if (faltan.length > 0) {
      alert("Este ramo está bloqueado. Aún no cumples los prerrequisitos.");
      return;
    }
    estado[ramo.id] = true;
    div.classList.add("aprobado");
  }
  guardarEstado();
}

crearMalla();

