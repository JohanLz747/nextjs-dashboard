'use client'
import register from "@/app/hooks/register";
export default function page() {
  const {
    user, setUser, nombre, setNombre, email, setEmail, password, setPassword, registrar
  } = register()
  return (
    <div>
      <form onSubmit={registrar}>
        <h2>Registrarse</h2>
        <input type="text" value={nombre} required placeholder='Nombre' onChange={e => setNombre(e.target.value)} />
        <input type="email" value={email} required placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password}  placeholder='Contraseña' onChange={e => setPassword(e.target.value)} />
        <button type='submit'>Registrar</button>
      </form>
    </div>
  )
}
