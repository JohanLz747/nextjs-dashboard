"use client"
import { useState, useEffect } from 'react'
import Swal from "sweetalert2";
export default function useProduct() {
    const [product, setProduct] = useState([]);
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    // 🟢 Cargar productos desde la base de datos
    const getProductos = async () => {
        try {
            const res = await fetch("/api/productos");
            if (!res.ok) throw new Error("Error al obtener productos");
            const data = await res.json();
            setProduct(data);
        } catch (error) {
            console.error("Error al cargar productos:", error);
        }
    };
    // 🟢 Crear producto
    const agregar = async (e) => {
        e.preventDefault();
        try {
            const body = {
                nombre,
                precio: Number(precio),
                stock: Number(stock),
            };
            const res = await fetch("/api/productos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            if (res.ok) {
                Swal.fire("Éxito", "Producto guardado correctamente.", "success");
                setNombre("");
                setPrecio("");
                setStock("");
                getProductos();
            } else {
                Swal.fire("Error", "No se pudo guardar el producto", "error");
            }
        } catch (error) {
            Swal.fire("Error", "Ocurrió un problema al guardar", "error");
            console.error(error);
        }
    };
    // 🟢 Eliminar producto
    const deleteProduct = async (id) => {
        const confirm = await Swal.fire({
            title: "¿Eliminar producto?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        });
        if (!confirm.isConfirmed) return;
        try {
            const res = await fetch(`/api/productos/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Nose pudo eliminar")
            setProduct((prev) => prev.filter((p) => p.id !== id));
            Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
        } catch (error) {
            Swal.fire("Error", error.message, "error");
        }
    };
    // 🟢 Actualizar producto
    const updateProduct = async (id) => {
        const producto = product.find((p) => p.id === id)
        if (!producto) {
            Swal.fire("Error", "Producto no encontrado en la lista", "error")
            return
        }
        const { value: formValues } = await Swal.fire({
            title: "Actualizar producto",
            html: `
      <input id="nombre" class="swal2-input" placeholder="Nombre" value="${producto.nombre}" />
      <input id="precio" class="swal2-input" placeholder="Precio" type="number" value="${producto.precio}" />
      <input id="stock" class="swal2-input" placeholder="Stock" type="number" value="${producto.stock}" />
    `,
            focusConfirm: false,
            preConfirm: () => {
                return {
                    nombre: document.getElementById("nombre").value,
                    precio: document.getElementById("precio").value,
                    stock: document.getElementById("stock").value,
                }
            },
            showCancelButton: true,
            confirmButtonText: "Actualizar",
            cancelButtonText: "Cancelar",
        })
        if (!formValues) return
        try {
            const res = await fetch(`/api/productos/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formValues),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.error || "No se pudo actualizar")
            // Actualiza la lista local
            setProduct(product.map((p) => (p.id === id ? { ...p, ...formValues } : p)))
            Swal.fire("Actualizado", "Producto actualizado correctamente", "success")
        } catch (error) {
            Swal.fire("Error", error.message, "error")
        }
    }
    // 🟢 Cargar productos al montar el componente
    useEffect(() => {
        getProductos();
    }, []);
    // 🟢 Retornar variables y funciones al componente
    return {
        product,
        nombre,
        setNombre,
        precio,
        setPrecio,
        stock,
        setStock,
        agregar,
        deleteProduct,
        updateProduct,
    };
}
