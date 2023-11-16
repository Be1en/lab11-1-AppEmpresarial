import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  

  const agregarTarea = (texto) => {
     
    setTareas([...tareas, { texto, completada: false, fecha: new Date() }]);
  };
  

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }
  // FILTROS POR FECHA
  const ordenarTareasPorFechaAscendente = () => {
    const tareasOrdenadas = [...tareas].sort((a, b) => a.fecha - b.fecha);
    setTareas(tareasOrdenadas);
  };
  
  const ordenarTareasPorFechaDescendente = () => {
    const tareasOrdenadas = [...tareas].sort((a, b) => b.fecha - a.fecha);
    setTareas(tareasOrdenadas);
  };

  return (
    <div className="App container p-5">
      <h1>Lista de Tareas</h1>
  
      {/* Botones de Ordenación */}
      <div className="btn-group mb-3">
      <button className="btn" onClick={ordenarTareasPorFechaAscendente}>
        Ordenar Ascendente
      </button>
      <button className="btn" onClick={ordenarTareasPorFechaDescendente}>
        Ordenar Descendente
      </button>
    </div>
  
      <TareaForm agregarTarea={agregarTarea} />
      <Filtros filtrarTareas={filtrarTareas} />
      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
      />
    </div>
  );
  
}

export default App;
