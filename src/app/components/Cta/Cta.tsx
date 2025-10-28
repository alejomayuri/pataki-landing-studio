import React from "react";

const Cta = () => {
    return (
        <section id="contacto" className="flex flex-col bg-background-secondary py-16">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-6 text-foreground text-center md:text-left">
                    Convierte tus {" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        ideas
                    </span>
                    {" "} en una landing que{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        impulse
                    </span>
                    {" "} tu negocio
                </h2>

                <p className="text-[var(--color-foreground)] font-sans text-base sm:text-lg max-w-3xl text-center md:text-left mx-auto md:mx-0">
                    En Pataki Landing Studio transformamos conceptos en experiencias digitales que venden. Diseño, desarrollo y optimización pensados para destacar tu marca.
                </p>

                <div className="flex justify-center md:justify-start">
                    <a
                        className="font-display cursor-pointer bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-8 py-4 sm:py-5 rounded-xl text-lg sm:text-xl md:text-2xl font-medium hover:from-[#FF0080] hover:to-[#7928CA] transition-colors duration-300 inline-block mt-8"
                    >
                        Solicita tu landing
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cta;
