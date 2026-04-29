import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SaludoComponent from '../components/SaludoComponent'
import CardChildren from '../components/CardChildren'
import AlertCard from '../components/AlertCard'
import UserCard from '../components/UserCard'
import UsuarioComponent from '../components/UsuarioComponent'
import ButtonActionComponent from '../components/ButtonActionComponent'
import ProductoComponent from '../components/ProductoComponent'
import WrestlersComponent from '../components/WrestlersComponents'

export default function AppView() {
  const parametro = '12345'
  const user = {
    nombre: 'Randy Orton',
    edad: 30,
  }

  const [usuario, setUsuario] = useState('Randy Orton')

  // useState(0) crea el estado "contador" con valor inicial 0.
  // "contador" es el valor actual; "setContador" es la función para cambiarlo.
  // Cada vez que llamas setContador, React re-renderiza el componente con el nuevo valor.
  const [contador, setContador] = useState(0)
  const [isTrue, setIsTrue] = useState(true)

  useEffect(() => {
    console.log("Este es el useEffect ejecutandose")
  }, [isTrue])

  const handleClick = () => {
    alert('Haz hecho click en el botón')
  }

  const [products, setProducts] = useState([
    { id: 1, name: 'Producto A', precio: 10 },
    { id: 2, name: 'Producto B', precio: 20 },
    { id: 3, name: 'Producto C', precio: 30 },
    {id: 4, name: 'Producto D', precio: 40},
  ])
  const [wrestlers, setWrestlers] = useState([
    { id: 1, name: 'Randy Orton', edad: 50 },
    { id: 2, name: 'John Cena', edad: 45 },
    { id: 3, name: 'Triple H', edad: 49 },
    { id: 4, name: 'El Grande Americano', edad: 33 },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">

      {
        isTrue ? (
          <h1>Es verdadero</h1>
        ):(<h1>Es falso</h1>)

      }
        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            App View
          </h1>
          <p className="text-slate-500 text-lg">
            Demostración de componentes y hooks
          </p>
        </header>

        {/* === COMPONENTES === */}
        <div className="space-y-6">
          <SectionTitle eyebrow="01" title="Componentes" />

          {/* Saludo destacado */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <SaludoComponent nombre="John" apellido="Cena" edad={21} />
          </section>

          {/* Grid de cards */}
          <section className="grid gap-6 md:grid-cols-2">
            <CardChildren>
              <p className="text-2xl font-semibold text-center text-white">
                Contenido dentro del CardChildren
              </p>
            </CardChildren>

            <UsuarioComponent nombre={usuario} edad={user.edad} />

            <AlertCard>
              <p>Soy un mensaje de alerta</p>
            </AlertCard>

            <UserCard
              nombre="Aaron Telles"
              rol="idk bro"
              email="aarontelles@gmail.com"
            />
          </section>

          {/* Botón de acción */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col items-center gap-3">
            <p className="text-sm text-slate-500">Componente con prop de acción</p>
            <ButtonActionComponent onClick={handleClick} />
          </section>
        </div>


        <ProductoComponent name = {"Tenis"} precio={25} id={5} />
        {
          products.map((product) => (
            <ProductoComponent
              key={product.id}
              name={product.name}
              precio={product.precio}
              id={product.id} />
          ))
        }

        {
          wrestlers.map((wrestler) => (
            <WrestlersComponent
              key={wrestler.id}
              name={wrestler.name}
              edad={wrestler.edad}
              id={wrestler.id} />
          ))
        }


        {/* === HOOKS === */}
        <div className="space-y-6">
          <SectionTitle eyebrow="02" title="useState" />

          <section className="grid gap-6 md:grid-cols-2">
            {/* Contador */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">Contador</h3>

              {/* Muestra el valor actual del estado "contador" en pantalla */}
              <p className="text-6xl font-bold text-center text-indigo-600 tabular-nums">
                {contador}
              </p>

              <div className="flex justify-center gap-3">
                {/* Al hacer click, resta 1 al valor actual */}
                <button
                  onClick={() => setContador(contador - 1)}
                  className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 text-xl font-bold hover:bg-slate-300 transition-colors"
                >
                  −
                </button>

                {/* Reinicia el contador */}
                <button
                  onClick={() => setContador(0)}
                  className="px-5 h-12 rounded-xl bg-white text-slate-500 font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Reset
                </button>

                {/* Al hacer click, suma 1 al valor actual */}
                <button
                  onClick={() => setContador(contador + 1)}
                  className="w-12 h-12 rounded-xl bg-indigo-600 text-white text-xl font-bold hover:bg-indigo-700 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* useState con input */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">
                Cambia el nombre del usuario
              </h3>

              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Escribe un nombre..."
              />

              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
                  Nombre actual
                </p>
                <p className="text-xl font-semibold text-indigo-600">{usuario}</p>
              </div>
            </div>
          </section>
        </div>

        {/* === NAVEGACIÓN === */}
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-200">
          <Link
            to="/otra"
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700 transition-colors"
          >
            Ir a otra página
          </Link>

          <Link
            to={`/parametro/${parametro}`}
            className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold border border-indigo-200 hover:bg-indigo-50 transition-colors"
          >
            Ir a página con parámetro
          </Link>
        </nav>


      </div>
    </div>
  )

}

// Pequeño componente auxiliar para los títulos de sección
function SectionTitle({ eyebrow, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-mono font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md px-2 py-1">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  )
}