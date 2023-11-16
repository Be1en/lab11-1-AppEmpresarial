import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={completada}
          onChange={onToggleCompletada}
        />
        <span
          className={`mr-auto ${completada ? 'text-success' : ''}`}
          style={{ display: isEditing ? 'none' : 'inline' }}
        >
          {tarea}
        </span>
      </div>
      {isEditing ? (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              onClick={handleSaveClick}
            >
              Guardar
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            className="btn btn-danger m-2"
            onClick={onDelete}
          >
            Eliminar
          </button>
          <button
            className="btn btn-info m-2"
            onClick={handleEditClick}
          >
            Editar
          </button>
        </div>
      )}
    </li>
  );
  
}

export default Tarea;
