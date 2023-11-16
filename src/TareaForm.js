import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: Evitar tarea en blanco
    if (texto.trim() === "") {
      setError("Por favor, ingresa un texto para la tarea.");
      return;
    }

    // Validación: Evitar texto demasiado largo
    const MAX_LENGTH = 50; // Define la longitud máxima permitida
    if (texto.length > MAX_LENGTH) {
      setError(`El texto de la tarea no puede tener más de ${MAX_LENGTH} caracteres.`);
      return;
    }

    // Si pasa las validaciones, agrega la tarea y reinicia el estado
    agregarTarea(texto);
    setTexto("");
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <div className="input-group m-3">
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            setError(null); // Limpia el mensaje de error al comenzar a escribir
          }}
        />
        <button type="submit" className="btn btn-primary">Agregar Tarea</button>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}

export default TareaForm;
