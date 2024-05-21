import React, { useState } from 'react';

function Formulario({ handleSubmit }) {
  const [formValues, setFormValues] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    // Limpiar el error del campo actual al modificar su valor
    setErrors(prevErrors => ({
      ...prevErrors,
      [e.target.name]: ''
    }));
  }

  const submitForm = e => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const confirmAdd = window.confirm("¿Estás seguro de que deseas agregar esta cita?");
      if (confirmAdd) {
        handleSubmit(formValues);
        setFormValues({
          mascota: '',
          propietario: '',
          fecha: '',
          hora: '',
          sintomas: ''
        });
        setErrors({}); // Limpiar todos los errores después de enviar el formulario
      }
    } else {
      setErrors(validationErrors);
    }
  }

  const validateForm = () => {
    const errors = {};
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0]; // Obtiene la fecha actual en formato YYYY-MM-DD
    const currentTime = today.toTimeString().split(' ')[0]; // Obtiene la hora actual en formato HH:MM:SS
  
    if (formValues.mascota === '' || !isNaN(formValues.mascota)) {
      errors.mascota = 'El nombre de la mascota es requerido y no puede contener números';
    }
    if (formValues.propietario === '' || !isNaN(formValues.propietario)) {
      errors.propietario = 'El nombre del propietario es requerido y no puede contener números';
    }
    if (formValues.fecha === '' || formValues.fecha < currentDate) {
      errors.fecha = 'La fecha es requerida y debe ser igual o posterior a la fecha actual';
    }
    if (formValues.hora === '' || (formValues.fecha === currentDate && formValues.hora < currentTime)) {
      errors.hora = 'La hora es requerida y debe ser igual o posterior a la hora actual si la fecha es hoy';
    }
    if (formValues.sintomas === '') {
      errors.sintomas = 'Los síntomas son requeridos';
    }
    return errors;
  }

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={submitForm}>
        <label>Nombre Mascota</label>
        <input 
          type="text"
          name="mascota"
          value={formValues.mascota}
          className="u-full-width"
          onChange={handleChange}
        />
        {errors.mascota && <p className="error">{errors.mascota}</p>}
        <label>Nombre Dueño</label>
        <input
          type="text"  
          name="propietario"
          value={formValues.propietario}
          className="u-full-width"
          onChange={handleChange} 
        />
        {errors.propietario && <p className="error">{errors.propietario}</p>}
        <label>Fecha</label>  
        <input
          type="date"
          name="fecha"
          value={formValues.fecha}
          className="u-full-width" 
          onChange={handleChange}
        />
        {errors.fecha && <p className="error">{errors.fecha}</p>}
        <label>Hora</label>
        <input  
          type="time"
          name="hora"
          value={formValues.hora}
          className="u-full-width"
          onChange={handleChange}
        />
        {errors.hora && <p className="error">{errors.hora}</p>}
        <label>Síntomas</label>
        <textarea  
          name="sintomas"
          value={formValues.sintomas}
          className="u-full-width"
          onChange={handleChange}
        />
        {errors.sintomas && <p className="error">{errors.sintomas}</p>}
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;
