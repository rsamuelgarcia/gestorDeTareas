"use strict";
const formTareas = document.querySelector('#formTarea');
formTareas.addEventListener("submit", guardarTarea);
const listaTareas = document.querySelector('#lista-tareas');
listaTareas.addEventListener('click', eliminarTarea);
window.addEventListener('load', mostrarTareasDeLocalStorage);
function guardarTarea(e) {
    e.preventDefault();
    let objetoTarea = creacionDeNodo();
    creacionDeBotonEliminar(objetoTarea.tarea);
    let lista = document.getElementById('lista-tareas');
    lista.appendChild(objetoTarea.tarea);
    guardarEnLocalStorage(objetoTarea.texto);
}
function creacionDeNodo() {
    let tarea = document.createElement('li');
    let textoForm = document.querySelector('#tarea');
    let textoTarea = document.createTextNode(textoForm.value);
    tarea.appendChild(textoTarea);
    textoForm.value = "";
    let objetoTarea = {
        tarea: tarea,
        texto: tarea.innerText
    };
    return objetoTarea;
}
function creacionDeBotonEliminar(tarea) {
    let eliminar = document.createElement('a');
    eliminar.setAttribute('href', '#');
    eliminar.appendChild(document.createTextNode('X'));
    tarea.appendChild(eliminar);
}
function eliminarTarea(e) {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        eliminarDeLocalStorage(e.target.parentElement);
        e.target.parentElement.remove();
    }
}
function guardarEnLocalStorage(tarea) {
    let tareas = verificarExistenciaDeArray();
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
function verificarExistenciaDeArray() {
    let tareas;
    if (localStorage.getItem('tareas') == null) {
        tareas = [];
    }
    else {
        tareas = JSON.parse(localStorage.getItem('tareas'));
    }
    return tareas;
}
function mostrarTareasDeLocalStorage() {
    let tareas = verificarExistenciaDeArray();
    tareas.forEach(function (tarea) {
        let tareaNodo = document.createElement('li');
        let textoTarea = document.createTextNode(tarea);
        tareaNodo.appendChild(textoTarea);
        creacionDeBotonEliminar(tareaNodo);
        let lista = document.getElementById('lista-tareas');
        lista.appendChild(tareaNodo);
    });
}
function eliminarDeLocalStorage(elemento) {
    let palabra = elemento.innerText.substring(0, elemento.innerText.length - 1);
    let tareas = verificarExistenciaDeArray();
    tareas.splice(tareas.indexOf(palabra), 1);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
//# sourceMappingURL=app.js.map