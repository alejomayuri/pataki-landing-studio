import React from "react";

const HowItWorks = () => {
    return (
        <section className="flex flex-col bg-background py-16">
            <div className="w-6xl mx-auto px-6 ">
                <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6 max-w-full text-center text-foreground">
                    ¿Cómo {' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">funciona</span>
                    ?
                </h2>
                <div>
                    <div className="max-w-full mx-auto flex justify-start items-center">
                        <div className="p-6 rounded-2xl shadow-md border-b-2 border-[var(--color-galaxy-start)] mb-8">
                            <h3 className="text-xl font-semibold mb-2"> 1. Cuéntanos tu idea</h3>
                            <p className="text-[var(--color-foreground-secondary)]">Cuéntanos brevemente de qué trata tu producto o servicio y qué objetivos quieres lograr con tu landing page.</p>
                        </div>
                    </div>
                    <div className="max-w-full mx-auto flex justify-center items-center">
                        <div className="p-6 rounded-2xl shadow-md border-b-2 border-[#BB33A8] mb-8">
                            <h3 className="text-xl font-semibold mb-2">2. La diseñamos contigo</h3>
                            <p className="text-[var(--color-foreground-secondary)]">Creamos una propuesta visual y funcional, trabajando contigo en cada paso para asegurar que tu landing refleje tu marca.</p>
                        </div>
                    </div>
                    <div className="max-w-full mx-auto flex justify-end items-center">
                        <div className="p-6 rounded-2xl shadow-md border-b-2 border-[var(--color-galaxy-end)]">
                            <h3 className="text-xl font-semibold mb-2">3. Lanzamos tu web</h3>
                            <p className="text-[var(--color-foreground-secondary)]">Publicamos tu web totalmente optimizada, lista para ofrecer una experiencia impecable y empezar a generar resultados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;