"use client"
import auth from "@/app/hooks/auth";
export default function page() {
const{
validar,
email,
password,setEmail,setPassword
}=auth()
  return (
    <div className="flex flex-row">
      <form onSubmit={validar} className="bg-white rounded border-green-500 border-1 flex flex-col p-6 m-8 items-center w-[330px] h-[480px]">
        <h2 className="text-gray-700 m-8 text-xl font-bold">Login</h2>
        <input value={email} type="email" required placeholder='Email' className="text-gray-600 m-8 border-0 border-b-1" onChange={e=>setEmail(e.target.value)}/>
        <input value={password}type="password" required placeholder="Contraseña" className="text-gray-600 m-8 border-0 border-b-1" onChange={e=>setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-500 shadow hover:bg-blue-800 border-black border-0.5 w-[160px] m-8 rounded h-8">Enviar</button>
      </form>
    </div>
  )
}
