import React from 'react'

export default function UserCard(props) {
  return (
    <div className='bg-blue-400 border rounded-2xl p-5'>
      Hola desde un componente con props, {props.nombre} {props.rol} {props.email} 
    </div>
  )
}
