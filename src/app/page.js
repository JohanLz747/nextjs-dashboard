  "use client"
  import { useState } from "react";
  import  Link  from "next/link";

  export default function Home() {
    const [click, setClick] = useState(" ")
    function guardar(e) {
      e.preventDefault()
      if (click.trim()=== "") return
      const datosNombre = [...name, click]
      setName(datosNombre)
      setClick("")
      alert("dato guardado")
    }

    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <form onSubmit={guardar}>
          <input value={click} placeholder="text" required onChange={e => setClick(e.target.value)} className="border p-2 rounded"></input>
          <button type="submit">Enviar</button>
        </form>
        <footer>
          <Link href="./pages/Inventary">Inventory</Link>
          <Link href="./pages/Login">Login</Link>
        </footer>
      </div>
    );
  }
