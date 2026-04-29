import { useParams } from 'react-router-dom'
import React from 'react'

export default function ParamView() {
  
    const { id } = useParams()
  return (
    <div className='text-5xl font-black'>{id}</div>
  )
}
