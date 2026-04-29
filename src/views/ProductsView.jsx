import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { getProducts, deleteProduct } from '../services/products/productService'

export default function ProductsView() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(data => setProducts(data))
    }, [])

    const handleDelete = async (id) => {
        if (!confirm('¿Seguro que quieres eliminar este producto?')) return
        try {
            await deleteProduct(id)
            setProducts(prev => prev.filter(p => p.id !== id))
        } catch (error) {
            console.error('Error al eliminar producto:', error)
        }
    }

    return (
        <>
            <h1 className="text-5xl font-bold">Administra tus Productos</h1>

            <Link
                to={'/products/create'}
                className='bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded text-white font-bold my-10'
            >
                Crear Producto
            </Link>

            <div className='grid grid-cols-3 gap-4 pt-10'>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        category={product.category}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </>
    )
}
