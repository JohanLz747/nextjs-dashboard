import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function PUT(request, { params }) {
  const data = await request.json()
  const userupdate= await prisma.usuarios.update({
    where: {
      id: Number(params.id)
    },data:data
  })
  return NextResponse.json(userupdate)
  /* try {
     const id = parseInt(params.id);
     const body = await request.json();
     const { nombre, email } = body;
     if (isNaN(id))
       return NextResponse.json({ error: "Id Invalido" }, { status: 400 });
     const usuario = await prisma.usuarios.findUnique({ where: { id } });
     if (!usuario)
       return NextResponse.json(
         { error: "Usuario no encontrado" },
         { status: 404 }
       );
     const actualizado = await prisma.usuarios.update({
       where: { id },
       data: { nombre, email },
     });
 
     return NextResponse.json({
       message: "Usuario actualizado",
       usuario: actualizado,
     });
   } catch (error) {
     return NextResponse.json({ error: error.message }, { status: 500 });
   }*/
}
export async function DELETE(request, { params }) {
  try {
    const id = Number(params.id);
    if (isNaN(id))
      return NextResponse.json({ error: "Id invalido" }, { status: 400 });

    const taskremoved = await prisma.usuarios.delete({ where: { id: Number(params.id) } });
    return NextResponse.json(taskremoved, { message: "Usuario eliminado" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}   