import React from 'react';
import Tarea from './Tarea';
import 'bootstrap/dist/css/bootstrap.min.css';
function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
  return (
    <ul className="list-group">
      {tareas.map((tarea, index) => (
        <li key={index} className={`list-group-item ${tarea.completada ? 'list-group-item-success' : ''}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="flex-grow-1">
              <div>{tarea.fecha.toLocaleString()}</div>
              <Tarea
                tarea={tarea.texto}
                completada={tarea.completada}
                onDelete={() => eliminarTarea(index)}
                onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
                onToggleCompletada={() => toggleCompletada(index)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}


export default ListaTareas;
