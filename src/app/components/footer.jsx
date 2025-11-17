import React from 'react'

export default function FooterMain() {
    return (
        <footer className='bg-gray-900 py-6  text-gray-300'>
            <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
                <p>© 2025 MiEmpresa. Todos los derechos reservados.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Facebook 📱</a>
                    <a href="#" className="hover:text-white">Instagram ☕️</a>
                    <a href="#" className="hover:text-white">LinkedIn 💻</a>
                </div>
            </div>
        </footer>

    )
}
