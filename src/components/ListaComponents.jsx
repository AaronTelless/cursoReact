import React from 'react'

export default function ListaComponents({onSeleccionar}) {
  return (
    <ul className='flex flex-col justify-self-center h-20'>
        <li>
            <button onClick={() => onSeleccionar("Elemento 1 seleccionado")}>Elemento 1</button>
        </li>

        <li>
            <button onClick={() => onSeleccionar("Elemento 2 seleccionado")}>Elemento 2</button>


        </li>
    </ul>
  )
}
