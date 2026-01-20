'use client'
import register from "@/app/hooks/register";

export default function page() {
  const {
    user, setUser, nombre, setNombre, email, setEmail, password, setPassword, registrar
  } = register()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={registrar}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Registrarse
        </h2>

        <input
          type="text"
          value={nombre}
          required
          placeholder='Nombre'
          onChange={e => setNombre(e.target.value)}
          className="w-full mb-4 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          value={email}
          required
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          placeholder='Contraseña'
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type='submit'
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Registrar
        </button>
      </form>
    </div>
  )
}
