import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Obtener todos los productos
export async function GET() {
  try {
    const productos = await prisma.producto.findMany();
    return NextResponse.json(productos);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ✅ Crear un nuevo producto
export async function POST(request) {
  try {
    const body = await request.json();
    const nuevo = await prisma.producto.create({
      data: {
        nombre: body.nombre,
        precio: Number(body.precio),
        stock: Number(body.stock),
      },  
    });
    return NextResponse.json({ message: "Producto creado", producto: nuevo });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
