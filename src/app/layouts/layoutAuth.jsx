
import React from 'react'
import FooterMain from "@/app/components/footer";

export default function LayoutAuth({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <main className=" flex flex-grow  flex-col">{children}</main>
            <FooterMain />
        </div>

    )
}
