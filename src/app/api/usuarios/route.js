import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request,{params}) {
    try {
        const users = await prisma.usuarios.findMany({
            include: { producto: true } // Opcional, para traer los productos de cada usuario
        });
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
export async function POST(request) {
    try {
        const {nombre,email} = await request.json()
        const nuevo = await prisma.usuarios.create({
            data: {
                nombre,
                email
            },
        })
        return NextResponse.json({ message: "Usuario Agregado", usuarios: nuevo })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}  