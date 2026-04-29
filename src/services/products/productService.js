import { apiUrl } from "../apiService"

const buildUrl = (path) => {
    const base = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl
    return `${base}/${path}`
}

export const getProducts = async () => {
    try {
        const response = await fetch(buildUrl('products'))
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
        return await response.json()
    } catch (error) {
        console.error('Error fetching products:', error)
        return []
    }
}

export const createProduct = async (productData) => {
    const response = await fetch(buildUrl('products'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
    })
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
    return await response.json()
}

export const updateProduct = async (productId, productData) => {
    const response = await fetch(buildUrl(`products/${productId}`), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
    })
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
    return await response.json()
}

export const deleteProduct = async (productId) => {
    const response = await fetch(buildUrl(`products/${productId}`), {
        method: 'DELETE'
    })
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
}

export const getByProductId = async (id) => {
    try {
        const response = await fetch(buildUrl(`products/${id}`))
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
        return await response.json()
    } catch (error) {
        console.error('Error fetching product by ID:', error)
        return null
    }
}
