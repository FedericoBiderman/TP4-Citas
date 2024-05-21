import React from 'react';

function Cita({cita,setCitas, citas}) {
  const { mascota, propietario, fecha, hora, sintomas, id } = cita;
  
  const eliminar = (id) => {    
    const confirmar = window.confirm("¿estas seguro de eliminar esta cita?");
    if(confirmar){
      const newList = citas.filter(item=>item.id!==id);
      setCitas(newList);
    }
    
  }

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>      
      <button onClick = {()=>eliminar(id)} className="button eliminar u-full-width">Eliminar ×</button>
    </div>
  );
}

export default Cita;
