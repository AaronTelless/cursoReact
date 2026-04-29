import React from 'react'

export default function CardChildren({titulo, children}) {
  return (
    <div className='bg-green-400 border-2 rounded-2xl shadow-2xl p-5 flex flex-col items-center gap-3'>
        <h1>{titulo}</h1>
          {children}
        <button className='button-simple'>Soy un pinche boton simple btw</button>
    </div>
  )
}
