'use client'
import { useState } from 'react'
export default function auth() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const validar = (e) => {
        e.preventDefault()
        try {
            const usuarioExistente = JSON.parse(localStorage.getItem("User")).find(u => u.email === email && u.password===password)
            if (usuarioExistente) {
                alert("Usuario encontrado")
            }
            else{
                alert("correo y/o contraseña incorrecta")
            }
        } catch (error) {
            alert(error)
        }
        setEmail("")
        setPassword("")
    }
    return { validar, email, setEmail, password, setPassword }
}