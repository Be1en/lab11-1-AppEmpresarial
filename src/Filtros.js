import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Filtros({ filtrarTareas }) {
    return (
        <div className="input-group m-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => filtrarTareas("Todas")}
          >
            Todas
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => filtrarTareas("Pendientes")}
          >
            Pendientes
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => filtrarTareas("Completadas")}
          >
            Completadas
          </button>
        </div>
      );
      
}

export default Filtros;
