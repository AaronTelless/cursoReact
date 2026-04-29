import React from 'react'

export default function ProductoComponent({name, precio, id}) {
  return (
    <div className="border border-slate-200 rounded-xl p-4">
      <p className="text-slate-400 text-sm">#{id}</p>
      <p className="font-semibold text-slate-800">{name}</p>
      <p className="text-indigo-600">${precio}</p>
    </div>
  )
}
