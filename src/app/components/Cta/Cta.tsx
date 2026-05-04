import React from "react";
import Link from "next/link";

const Cta = () => {
    return (
        <section id="contacto" className="flex flex-col bg-background-secondary py-12 md:py-16">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-6 text-foreground text-center md:text-left">
                    ¿Por qué necesitas una {" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        landing page
                    </span>
                    ?
                    {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        impulse
                    </span>
                    {" "} tu negocio */}
                </h2>

                <div className="flex-1 space-y-6">
                    <p className="text-[var(--color-foreground)] font-sans text-base sm:text-lg max-w-3xl text-center md:text-left mx-auto md:mx-0">
                        Si tu negocio no tiene una landing page, estás perdiendo dinero cada día. No es un extra ni un lujo. Es donde tus visitas se convierten en clientes.
                    </p>
                    <ul className="space-y-4 text-foreground/80 font-sans text-base sm:text-lg">
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-[#7928CA]">✓</span> 
                            Convierte visitas en clientes.
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-[#9B34B9]">✓</span> 
                            Hace que tu publicidad funcione.
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-[#C134A5]">✓</span> 
                            Controlas el mensaje.
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-[#E12892]">✓</span> 
                            Mide y analiza todo.
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-[#FF0080]">✓</span> 
                            Te da autoridad y claridad.
                        </li>
                    </ul>
                </div>

                {/* <p className="text-[var(--color-foreground)] font-sans text-base sm:text-lg max-w-3xl text-center md:text-left mx-auto md:mx-0">
                    Descubre cómo una landing page bien diseñada puede impulsar tu negocio y convertir visitantes en clientes.
                </p> */}

                <div className="flex justify-center md:justify-start">
                    <Link
                        href="/solicita-tu-landing"
                        className="font-display cursor-pointer bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-8 py-4 sm:py-5 rounded-xl text-lg sm:text-xl md:text-2xl font-medium hover:from-[#FF0080] hover:to-[#7928CA] transition-colors duration-300 inline-block mt-8"
                    >
                        Solicita tu landing
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;
