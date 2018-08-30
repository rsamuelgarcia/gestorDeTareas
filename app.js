"use strict";
const formTareas = document.querySelector('#formTarea');
formTareas.addEventListener("submit", guardarTarea);
const listaTareas = document.querySelector('#lista-tareas');
listaTareas.addEventListener('click', eliminarTarea);
function guardarTarea(e) {
    e.preventDefault();
    let tareas = document.createElement('li');
    let textoForm = document.querySelector('#tarea');
    let textoTarea = document.createTextNode(textoForm.value);
    tareas.appendChild(textoTarea);
    let lista = document.getElementById('lista-tareas');
    lista.appendChild(tareas);
}
function eliminarTarea(e) {
    e.preventDefault();
    console.log(e.target.nodeType());
}
//# sourceMappingURL=app.js.map