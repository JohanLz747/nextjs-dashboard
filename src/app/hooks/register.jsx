"use client"
import { useState } from 'react'
import { prisma } from '@prisma/client'
export default function register() {
    const [user, setUser] = useState([])
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const getuser = async () => {
        /*try {
            const res = await fetch("/api/usuarios")
            if (!res.ok) throw new Error("Error al traer productos")
            const data = await res.json()
            setUser(data)
        } catch (error) {
            console.error("Error")
        }*/
        return await prisma.usuarios.findMany(       )
    }
    const conso =async ()=>{
        const  userss = await getuser()
    }
    const registrar = async (e) => {
        e.preventDefault()
        try {
            const body = {
                nombre,
                email
            }
            const res = await fetch("/api/usuarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            if (res.ok) {
                setNombre("")
                setEmail("")
                getuser()
            }
        } catch (error) {
            console.log(error)
        }
        // Buscar si el email ya está registrado
        /*const usuarioExistente = user.find(u => u.email === email);
        if (usuarioExistente) {
            alert("Usuario Registrado");
            return; // Evita guardar un duplicado
        }
        setUser([...user, { name, email, password }])
        setName("")
        setEmail("")
        setPassword("")*/
    }
    return { user, setUser, nombre, setNombre, email, setEmail, password, setPassword, registrar }
}