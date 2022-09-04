import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";


const App = () => {

  const [tareas, settareas] = useState([])
  const [tarea, settarea] = useState({})

  useEffect(() => {
    const obtenerTareasLocalStorage = ()=>{
      const tareasLocalStorage = JSON.parse(localStorage.getItem("tareas")) ?? [];
      settareas(tareasLocalStorage)
    }
    obtenerTareasLocalStorage()
  },[]);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas]);
  

  const eliminarTarea = (id)=>{
    const actualizarTareas = tareas.filter( tarea => tarea.id !== id);
    settareas(actualizarTareas)
  }
  return (
    <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Form
          tarea={tarea}
          tareas={tareas}
          settareas={settareas}
          settarea={settarea}
          />
          <ListaTareas
          tareas={tareas}
          settarea={settarea}
          eliminarTarea={eliminarTarea}
          /> 
        </div>    
    </div>
  );
};

export default App