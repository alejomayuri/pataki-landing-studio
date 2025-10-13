"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" aria-label="Pataki Landing Studio - Inicio">
            <div className="relative w-[150px] h-[38px] md:w-[200px] md:h-[50px]">
                <Image
                src="/logo.png"
                alt="Pataki Landing Studio"
                fill
                sizes="(max-width: 768px) 150px, 200px"
                style={{ objectFit: "contain" }}
                priority
                />
            </div>
        </Link>

      {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-display">
            <Link href="#servicios">Servicios</Link>
            <Link href="#precios">Precios</Link>
            <Link href="#contacto">Contacto</Link>
            <Link
                href="#contacto"
                className="px-4 py-2 rounded-md text-white bg-gradient-galaxy"
                >
                Solicita tu landing
            </Link>
        </nav>

      {/* Mobile menu button */}
        <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
        >
            ☰
        </button>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-6 md:hidden font-display">
            <Link href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link href="#precios" onClick={() => setMenuOpen(false)}>Precios</Link>
            <Link href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            <Link
                href="#contacto"
                className="px-4 py-2 rounded-md bg-gradient-galaxy"
                onClick={() => setMenuOpen(false)}
            >
                Solicita tu landing
            </Link>
        </nav>
      )}
    </header>
  );
}