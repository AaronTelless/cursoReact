import React from 'react'
import { Link } from 'react-router-dom'

export default function OtraView() {
  return (
    <>
      <h1 className='text-5xl font-bold text-center bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
        Otra Página
      </h1>
      <div className='text-center mt-4'>
        <Link to={'/'} className='text-indigo-600 font-semibold hover:underline'>
          Volver al inicio
        </Link>
      </div>
    </>
  )
}