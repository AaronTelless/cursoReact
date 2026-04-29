import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByProductId } from "../services/products/productService";
import FormProduct from "../components/FormProduct";

export default function EditProductView() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getByProductId(id).then(data => setProduct(data));
    }, [id]);

    if (!product) return <p className="mt-10 text-center">Cargando producto...</p>;

    return (
        <>
            <h1 className="text-5xl font-bold">Editar Producto</h1>
            <FormProduct initialData={product} productId={id} />
        </>
    );
}
