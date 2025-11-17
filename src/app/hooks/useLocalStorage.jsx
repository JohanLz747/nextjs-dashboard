'use client'
import { useState, useEffect } from "react";
export default function useLocalStorage(key, initialValue) {
    // useState inicializa el valor leyendo de localStorage (si existe)
    const [value, setValue] = useState(() => {
        try {
            // Busca el valor almacenado con la clave 'key' en localStorage
            const storedValue = localStorage.getItem(key)
            // Si existe, lo convierte de texto a objeto con JSON.parse()
            // Si no existe, devuelve el valor inicial pasado como parámetro
            return storedValue ? JSON.parse(storedValue) : initialValue
        } catch (error) {
            // Si ocurre un error al leer o parsear (por ejemplo, datos corruptos), lo muestra en consola
            console.log(error)
            // Devuelve el valor inicial como respaldo
            return initialValue
        }
    })
    // useEffect se ejecuta cada vez que cambian 'key' o 'value'
    useEffect(() => {
        // Guarda el valor actualizado en localStorage en formato JSON
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])// <- Dependencias: solo se ejecuta cuando cambian
    // Retorna el valor actual y la función para actualizarlo (igual que useState)
    return [value, setValue]
}