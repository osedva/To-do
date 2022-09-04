import React from "react";
import Swal from "sweetalert2"


const Tarea = ({ tarea, settarea, eliminarTarea }) => {
  const { titulo, responsable, descripcion, fecha, id } = tarea;

  const handleEliminar = ()=>{
    Swal.fire({
      title: '¿Está seguro?',
      text: "¡No podrás recuperar la tarea!",
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#fc0303',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarTarea(id)
        Swal.fire({
          title: 'Tarea eliminada con exito!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Cerrar'
      })
      }else{
        Swal.fire({
          title: 'Cancelaste el proceso',
          icon: 'info',
          confirmButtonColor: '#fc0303',
          confirmButtonText: 'Cerrar'
      }) 
      }
    })
  }

  return (
    <div className="bg-white shadow-md px-5 py-5 mt-5 rounded-lg">
      <p className="font-bold mb-3 text-gray-600 uppercase">
        Titulo: <span className="font-normal normal-case">{titulo}</span>
      </p>
      <p className="font-bold mb-3 text-gray-600 uppercase">
        Responsable:{" "}
        <span className="font-normal normal-case">{responsable}</span>
      </p>
      <p className="font-bold mb-3 text-gray-600 uppercase">
        descripción:{" "}
        <span className="font-normal normal-case">{descripcion}</span>
      </p>
      <p className="font-bold mb-3 text-gray-600 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <div className="flex justify-between">
        <button
          className="bg-green-600 hover:bg-green-700 mt-4 @apply py-0 px-10 rounded-md text-white font-bold"
          type="button"
          onClick={()=> settarea(tarea)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 mt-4 py-0 px-10 rounded-md text-white font-bold"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
        
      </div>
    </div>
  );
};

export default Tarea;
