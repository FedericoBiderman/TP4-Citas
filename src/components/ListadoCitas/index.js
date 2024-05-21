import React from 'react';
import Cita from '../Cita';
function ListadoCitas({citas,setCitas}) {  

  const listaCitas = citas.map((cita, index) => (
    <Cita cita={cita} setCitas={setCitas} citas={citas} />
  ));

  return (
    <div className="one-half column">
      <h2>Listado de citas</h2>
      <div className='lista-citas'>
      {listaCitas}
      </div>
    </div>
  );
}

export default ListadoCitas;