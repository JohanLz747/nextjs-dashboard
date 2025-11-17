"use client"
import useProduct from "@/app/hooks/useProduct";
export default function Inventary() {
  const {
    product,
    nombre,
    setNombre,
    precio,
    setPrecio,
    stock,
    setStock,
    updateProduct,
    deleteProduct,
    agregar
  } = useProduct()
  return (
    <div className="flex-grow bg-white flex items-center justify-center ">
      <div className='bg-white flex flex-row gap-10 w-300 ml-6 '>
        <form onSubmit={agregar} className="flex flex-col gap-3  bg-gray-100  p-6 rounded-xl shadow border-2 border-black">
          <h1 className='text-center font-mono   text-xl mb-2 text-black'>Agregar</h1>
          <input placeholder="Producto" value={nombre} onChange={e => setNombre(e.target.value)} required type="text" className=" border-0 border-b-1  border-gray-400 p-2  text-gray-400 w-60" />
          <input placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} required min="0" step="0.01" type="number" className="border-0 border-b-1 border-gray-400 p-2  text-gray-400 w-60" />
          <input placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} required min="0" step="1" type="number" className="border-0 border-b-1  border-gray-400 p-2  text-gray-400 w-60" />
          <button type='submit' className="bg-blue-500 text-white h-10 mt-4 w-[80px] rounded  text-center flex  items-center justify-center">Guardar</button>
        </form>
      </div>
      <div className='flex h-[840px] flex-col bg-white  p-6 rounded-xl  w-[1600px]  text-black max-h-* overflow-y-auto'>
        <h2 className="text-xl font-bold mb-4 text-center">Lista de Productos</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">N°</th>
              <th className="p-3 border">N° BD</th>
              <th className="p-3 border">Producto</th>
              <th className="p-3 border">Precio</th>
              <th className="p-3 border">Stock</th>
              <th className='p-3 border'>Eliminar</th>
              <th className='p-3 border'>Actualizar</th>
            </tr>
          </thead>
          <tbody>
            {product.map((p, index) => (
              <tr key={p.id}>
                <td className="p-3 border">{index + 1}</td>
                <td className="p-3 border">{p.id}</td>
                <td className="p-3 border">{p.nombre}</td>
                <td className="p-3 border">{p.precio}</td>
                <td className="p-3 border">{p.stock}</td>
                <td className="p-3 border"><button className="bg-red-500 text-black px-3 py-1 rounded hover:bg-red-600" onClick={() => deleteProduct(p.id)}>Eliminar</button></td>
                <td className='p-3 border'><button className='bg-green-400  px-3 py-1 rounded hover:bg-green-600' onClick={() => updateProduct(p.id)}>Actualizar</button></td>
              </tr>
            ))}
            {product.length === 0 && (<tr>
              <td colSpan="7" className='text-center p-4 text-black border'>No hay productos</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}