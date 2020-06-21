var nombre_del_curso = [
    "Introducción a redes informaticas nivel 1",
    "Java para aplicaciones android",
    "Educacion para niños pequeños",
    "Introducción a redes informaticas nivel 1",
    "Java para aplicaciones android",
    "Educacion para niños pequeños"
];
var profesorQueImparte = [
    "Profesor: Bell Gates",
    "Alber Solorzano",
    "Maria Celeste",
    "Profesor: Bell Gates",
    "Alber Solorzano",
    "Maria Celeste"
];
var progresoDelCurso = [
    75,
    80,
    25,
    10,
    30,
    100
];


function cargarCurso() {
    
  var cajaDecursos = document.querySelector("#cajaDecursos");


  nombre_del_curso.forEach(function mensaje(Element,indice) {
  

    var curso = document.createElement("div");

    curso.innerHTML = 
    
    '<div class="curso">'+
        '<div class="imgCurso"></div>'+
        '<h3 class="tituloCurso">'+ Element+'</h3>'+
        '<p class="profesor">Profesor:' + profesorQueImparte[indice] +'</p>'+
        '<div class="cajaBotones">'+
            '<p class="porsentajeDelCurso">'+progresoDelCurso[indice]+'%</p>'+
            '<progress class="disBarraProgreso" min="0" max="100" value="'+progresoDelCurso[indice]+'"></progress>'+
            '<a href="#">'+
                '<p class="botonContinuarCurso">Continuar</p>'+
            '</a>'+
        '</div>'+
    '</div>';

    cajaDecursos.appendChild(curso);


  });
}

cargarCurso();