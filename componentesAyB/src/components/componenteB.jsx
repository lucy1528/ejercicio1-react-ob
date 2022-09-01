import React, {useState} from 'react'
// import PropTypes from 'prop-types'
// import { Contacto } from './../models/contacto.class';


function ComponenteB({contacto}) {
    const [conectado,setConectado] = useState(false)
    const changeState=()=>{
        contacto.conectado=conectado
        setConectado(!conectado)
    }

  return (
    <div>
        <h3>Nombre: {contacto.nombre}</h3>
        <h3>Apellido: {contacto.apellido}</h3>
        <h3>Email: {contacto.email}</h3>
        <h3>Conectado: {conectado ? <h3>Contacto en linea</h3> : <h3>Contacto No Disponible</h3>}</h3>
        <button onClick={changeState}>On/Off</button>
    </div>
  )
}

// ComponenteB.propTypes = {
//     contacto: PropTypes.instanceOf(Contacto) 
// }

export default ComponenteB
