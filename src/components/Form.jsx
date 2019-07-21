import React from 'react'
import useForm from './useForm'

const Form = props => {
  const { form, handleInput } = useForm()

  return (
    <div>
      <h1>FORM CHIDO</h1>
      <label for="name">Nombre:</label>
      <input onChange={e => handleInput(e)} type="text" name="name" />
      <p>Este es tu nombre: {form.name}</p>
      <label for="surname">Apellido:</label>
      <input onChange={e => handleInput(e)} type="text" name="surname" />
      <p>Este es tu apellido: {form.surname}</p>
      <label for="age">Edad:</label>
      <input onChange={e => handleInput(e)} type="text" name="age" />
      <p>Esta es tu edad: {form.age}</p>
    </div>
  )
}

export default Form
