

 const formTareas = <HTMLFormElement>document.querySelector('#formTarea')
 formTareas.addEventListener("submit", guardarTarea)

 const listaTareas = <HTMLDivElement>document.querySelector('#lista-tareas')
 
 listaTareas.addEventListener('click', eliminarTarea)




/* ================================= */

function guardarTarea(e:any){

    e.preventDefault()

    let tareas = <HTMLElement> document.createElement('li')
    let textoForm = <HTMLInputElement> document.querySelector('#tarea')
    let textoTarea = <Text> document.createTextNode(textoForm.value)

    tareas.appendChild(textoTarea)

    let lista  =<HTMLDivElement> document.getElementById('lista-tareas')
    lista.appendChild(tareas)
}

function eliminarTarea(e:any){
    e.preventDefault()

    console.log(e.target.nodeType())
    
}