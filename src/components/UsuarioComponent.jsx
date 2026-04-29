import React from 'react'

export default function UsuarioComponent({nombre, edad}) {
  return (
    <div className='flex flex-col gap-y-5'>
        <p> {nombre}</p>
        <p> {edad}</p>
    </div>
  )
}
