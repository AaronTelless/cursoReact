import React from 'react'

export default function AlertCard({ children }) {
  return (
    <div className='bg-yellow-300 border-2 rounded-2xl shadow-2xl p-5'>
      {children}
    </div>
  )
}
