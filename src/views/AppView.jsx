import React from 'react'
import { Link } from 'react-router-dom'

export default function AppView() {
  return (
    <>
      <h1 className='text-5xl font-bold text-center bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
        App View
      </h1>
      <div className='text-center mt-4'>
        <Link to={'/otra'} className='text-indigo-600 font-semibold hover:underline'>
          Ir a otra página
        </Link>
      </div>
    </>
  )
}