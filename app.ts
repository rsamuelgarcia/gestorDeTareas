const formTareas = <HTMLFormElement>document.querySelector('#formTarea')
 formTareas.addEventListener("submit", guardarTarea)

 const listaTareas = <HTMLDivElement>document.querySelector('#lista-tareas')
 
 listaTareas.addEventListener('click', eliminarTarea)


 window.addEventListener('load', mostrarTareasDeLocalStorage)




/* ===========================================================*/

function guardarTarea(e:Event){

    e.preventDefault()

    let objetoTarea = creacionDeNodo()

    creacionDeBotonEliminar(objetoTarea.tarea)

    let lista = <HTMLDivElement> document.getElementById('lista-tareas')
    lista.appendChild(objetoTarea.tarea)

    guardarEnLocalStorage(objetoTarea.texto)

}

function creacionDeNodo():any{

    let tarea = <HTMLElement> document.createElement('li')
    let textoForm = <HTMLInputElement> document.querySelector('#tarea')
    let textoTarea = <Text> document.createTextNode(textoForm.value)
    tarea.appendChild(textoTarea)

    textoForm.value = ""

    let objetoTarea = {
        tarea:tarea,
        texto:tarea.innerText
    }
    return objetoTarea
}

function creacionDeBotonEliminar(tarea:HTMLElement){

    let eliminar = <HTMLElement> document.createElement('a')
    eliminar.setAttribute('href', '#')
    eliminar.appendChild(document.createTextNode('X'))
    tarea.appendChild(eliminar)
}


function eliminarTarea(e:any){
    e.preventDefault()

    if(e.target.tagName == 'A'){
        
        eliminarDeLocalStorage(e.target.parentElement);
        <HTMLElement> e.target.parentElement.remove()
        
        
    }

}

function guardarEnLocalStorage (tarea:string):void {

    let tareas:string[] = verificarExistenciaDeArray()

    tareas.push(tarea)
  
    localStorage.setItem('tareas', JSON.stringify(tareas))

}

function verificarExistenciaDeArray():string[]{

    let tareas:string[]

    if(localStorage.getItem('tareas') == null){

        tareas = []

    }else{

        tareas = JSON.parse(<string>localStorage.getItem('tareas'))
        
    }
    return tareas
}

function mostrarTareasDeLocalStorage(){

    let tareas = verificarExistenciaDeArray()

    tareas.forEach(function(tarea){

    let tareaNodo = <HTMLElement> document.createElement('li')
    let textoTarea = <Text> document.createTextNode(tarea)
    tareaNodo.appendChild(textoTarea)

    creacionDeBotonEliminar(tareaNodo)

    let lista = <HTMLDivElement> document.getElementById('lista-tareas')
    lista.appendChild(tareaNodo)

    })

}

function eliminarDeLocalStorage(elemento:any){
    let palabra = elemento.innerText.substring(0, elemento.innerText.length - 1)

    let tareas = verificarExistenciaDeArray()

    tareas.splice(tareas.indexOf(palabra), 1)

    localStorage.setItem('tareas', JSON.stringify(tareas))
}