import React, { useState } from 'react';
import ListadoCitas from './components/ListadoCitas';
import Formulario from './components/Formulario';
function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = cita => {
    cita.id = Date.now();
    setCitas([...citas, cita]);
  }

  return (
    <>  
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario handleSubmit={agregarCita} />
          <ListadoCitas citas={citas} setCitas = {setCitas} />        
        </div>
      </div>
    </>
  );
}

export default App;
