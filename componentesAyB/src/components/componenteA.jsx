import React from 'react'
import ComponenteB from './componenteB'
import { Contacto } from './../models/contacto.class';

function ComponenteA() {
    const contactoDefault = new Contacto('Lucia', 'Cerpa', 'luxysm@gmail.com', 'false')
  return (
    <div>
        <ComponenteB contacto={contactoDefault}/>
    </div>
  )
}

export default ComponenteA
