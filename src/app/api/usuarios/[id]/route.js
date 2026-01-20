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