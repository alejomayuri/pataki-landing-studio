import React from "react";

const HowItWorks = () => {
    return (
        <section className="flex flex-col bg-background py-16">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-10 text-center text-foreground">
                    ¿Cómo{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        funciona
                    </span>
                    ?
                </h2>

                <div className="flex flex-col gap-8">
                    {/* Paso 1 */}
                    <div className="w-full flex justify-start md:justify-start">
                        <div className="w-full sm:w-3/4 md:w-auto p-6 rounded-2xl shadow-md border-b-2 border-[var(--color-galaxy-start)]">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                1. Cuéntanos tu idea
                            </h3>
                            <p className="text-[var(--color-foreground-secondary)] text-sm sm:text-base">
                                Cuéntanos brevemente de qué trata tu producto o servicio y qué objetivos quieres lograr con tu landing page.
                            </p>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="w-full flex justify-center">
                        <div className="w-full sm:w-3/4 md:w-auto p-6 rounded-2xl shadow-md border-b-2 border-[#BB33A8]">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                2. La diseñamos contigo
                            </h3>
                            <p className="text-[var(--color-foreground-secondary)] text-sm sm:text-base">
                                Creamos una propuesta visual y funcional, trabajando contigo en cada paso para asegurar que tu landing refleje tu marca.
                            </p>
                        </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="w-full flex justify-end md:justify-end">
                        <div className="w-full sm:w-3/4 md:w-auto p-6 rounded-2xl shadow-md border-b-2 border-[var(--color-galaxy-end)]">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                3. Lanzamos tu web
                            </h3>
                            <p className="text-[var(--color-foreground-secondary)] text-sm sm:text-base">
                                Publicamos tu web totalmente optimizada, lista para ofrecer una experiencia impecable y empezar a generar resultados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
