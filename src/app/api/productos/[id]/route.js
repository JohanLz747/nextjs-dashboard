import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Actualizar producto
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const { nombre, precio, stock } = body;

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const producto = await prisma.producto.findUnique({ where: { id } });
    if (!producto) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }

    const productoActualizado = await prisma.producto.update({
      where: { id },
      data: {
        nombre,
        precio: parseFloat(precio),
        stock: parseInt(stock),
      },
    });

    return NextResponse.json({ message: "Producto actualizado correctamente", productoActualizado });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Eliminar producto
export async function DELETE(request, { params }) {
  try {
    const productdelete= await prisma.producto.delete({ 
      where: {
         id:Number(params.id),
        },
      });
    return NextResponse.json(productdelete,{ message: "Producto eliminado correctamente" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
