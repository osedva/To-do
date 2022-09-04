import { useState, useEffect } from "react";
import AlertError from "./AlertError";


export const Form = ({tareas, settareas, tarea, settarea}) => {
  
  
  const [titulo, settitulo] = useState('')
  const [responsable, setresponsable] = useState('')
  const [descripcion, setdescripcion] = useState('')
  const [fecha, setfecha] = useState('')
  const [error, seterror] = useState(false)
  
 
  
  

  
     useEffect(() => {
      if(Object.keys(tarea).length > 0)
       settitulo(tarea.titulo)
       setresponsable(tarea.responsable)
       setdescripcion(tarea.descripcion)
       setfecha(tarea.fecha)
   
     },[tarea]);
 
  

  const generarId = ()=>{
   const id = Math.random().toString(20).substr(2);
    return id
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    if([titulo, responsable, descripcion, fecha].includes('')){
      seterror(true)
      setTimeout(seterror,2000,false);
      return;
    } else{
      seterror(false);
      
    }
    
    

    const objetoTareas = {
      titulo,
      responsable,
      descripcion,
      fecha,
      //id: generarId()
    }

    if(tarea.id){
      objetoTareas.id = tarea.id;

      const tareasActualizadas = tareas.map( (tareaState) => tareaState.id === tarea.id ? objetoTareas : tareaState );
      settareas(tareasActualizadas)
      settarea({});
    }else{
      objetoTareas.id = generarId()
      settareas([...tareas, objetoTareas]);
    }


      

    settitulo('')
    setresponsable('');
    setdescripcion('');
    setfecha('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5  mb-10">
     <h2 className="font-black text-3xl text-center mb-10">Crear Tareas</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5">
        <div>
        
          <div className="mb-3">
            <label
              htmlFor="titulo"
              className="block text-gray-700 uppercase font-bold"
            >
              Titulo
            </label>
            <input
              type="text"
              id="titulo"
              className="border-2 w-full rounded-md placeholderbg-gray-600"
              placeholder="Titulo"
              value={titulo}
              onChange={(e)=> settitulo(e.target.value)}
              
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="responsable"
              className="block text-gray-700 uppercase font-bold"
            >
              Responsable
            </label>
            <input
              type="text"
              id="responsable"
              className="border-2 w-full rounded-md placeholderbg-gray-600"
              placeholder="Responsable"
              value={responsable}
              onChange={(e)=> setresponsable(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="descripcion"
              className="block text-gray-700 uppercase font-bold"
            >
              Descripción
            </label>
            <input
              type="text"
              id="descripcion"
              className="border-2 w-full rounded-md placeholderbg-gray-600"
              placeholder="Descripcion"
              value={descripcion}
              onChange={(e)=> setdescripcion(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="fecha"
              className="block text-gray-700 uppercase font-bold"
            >
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              className="border-2 w-full rounded-md placeholderbg-gray-600"
              value={fecha}
              onChange={(e)=> setfecha(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 text-center">
          {tarea.id ? (
            <input
            type="submit"
            className="bg-purple-600 text-white uppercase font-bold w-40 rounded-md h-11 hover:bg-gray-500 hover:text-black cursor-pointer"
            value="Actualizar tarea"
          />
          ):(
            <input
            type="submit"
            className="bg-blue-600 text-white uppercase font-bold w-40 rounded-md h-11 hover:bg-gray-500 hover:text-black cursor-pointer"
            value="Agregar tarea"
          />
          )}
        </div>
        {error && (<AlertError><p>campos son obligatorios</p></AlertError>)}
      </form>
    </div>
  );
}
export default Form
