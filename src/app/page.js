"use client";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Título del software */}
      <div className="text-center mt-10 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Sistema de Gestión Empresarial
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Un software diseñado para administrar inventarios, gestionar usuarios
          y optimizar los procesos internos de cualquier negocio de manera rápida
          y eficiente.
        </p>
      </div>
      {/* Tarjetas de menú */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full mt-12">
        {/* Card Inventario */}
        <Link
          href="/pages/Inventary"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 block"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Inventory</h2>
          <p className="text-gray-600">
            Administra tus productos, controla el stock y visualiza el inventario general.
          </p>
        </Link>
        {/* Card Login */}
        <Link
          href="/pages/Login"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 block"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Login</h2>
          <p className="text-gray-600">
            Accede al sistema con tus credenciales y gestiona tus módulos internos.
          </p>
        </Link>
        <Link
          href="/pages/Register"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 block"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Register</h2>
          <p className="text-gray-600">
            Registra los datos de usuario dando credenciales de acceso.
          </p>
        </Link>
      </div>
    </div>
  );
}
