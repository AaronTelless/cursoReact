import { useState } from "react";
import { createProduct, updateProduct } from "../services/products/productService";
import { useNavigate } from "react-router-dom";

const FormProduct = ({ initialData, productId }) => {
  const navigate = useNavigate();
  const isEditing = Boolean(productId);

  const [formData, setFormData] = useState(
    initialData ?? { name: "", description: "", category: "", price: "0.0" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateProduct(productId, formData);
      } else {
        await createProduct(formData);
        setFormData({ name: "", description: "", category: "", price: "0.0" });
      }
      navigate('/products');
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-5 max-w-xl mt-10 mx-auto">
      <div>
        <label htmlFor="name" className="block font-semibold">
          Nombre Producto
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa el nombre del producto"
        />
      </div>

      <div>
        <label htmlFor="description" className="block font-semibold">
          Descripción Producto
        </label>
        <input
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa la descripción del producto"
        />
      </div>

      <div>
        <label htmlFor="category" className="block font-semibold">
          Categoría Producto
        </label>
        <input
          id="category"
          name="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa la categoría del producto"
        />
      </div>

      <div>
        <label htmlFor="price" className="block font-semibold">
          Precio Producto
        </label>
        <input
          id="price"
          name="price"
          type="text"
          value={formData.price}
          onChange={handleChange}
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa el precio del producto"
        />
      </div>

      <input
        type="submit"
        className="bg-indigo-500 w-full py-2 text-white rounded hover:bg-indigo-600 hover:cursor-pointer font-semibold"
        value={isEditing ? "Guardar Cambios" : "Agregar Producto"}
      />
    </form>
  );
};

export default FormProduct;
