import React from "react";
import Image from "next/image";

const Demos = () => {
    return (
        <section className="flex flex-col bg-background py-16">
            <div className="w-6xl mx-auto px-6 ">
                <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6 max-w-full text-center text-foreground">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">Explora</span>
                    {' '} lo que podemos {' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">crear</span>
                    {' '} juntos
                </h2>
                <p className="text-foreground font-sans max-w-full text-center text-lg">
                    Diseñamos, desarrollamos y optimizamos experiencias que impulsan tu negocio. Landings pensadas para atraer, convertir, posicionar y crecer contigo.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                    <div className="my-8">
                        <div className="rounded-md overflow-hidden">
                            <Image
                                src="/demos/demo1.png"
                                alt="Demo 1"
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-[var(--color-foreground)]">
                                Sabores que conquistan
                            </h3>
                            <p className="text-[var(--color-foreground-secondary)] mb-4 text-sm">
                                Una web elegante y cálida para servicios gastronómicos. Diseñada para transmitir confianza y comodidad.
                            </p>
                            <a
                                href="https://demo1.vercel.app"
                                target="_blank"
                                className="inline-block px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white"
                            >
                                Ver demo
                            </a>
                        </div>
                    </div>

                    <div className="my-8">
                        <div className="rounded-md overflow-hidden">
                            <Image
                                src="/demos/demo2.png"
                                alt="Demo 2"
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-[var(--color-foreground)]">
                                Diseño que transforma
                            </h3>
                            <p className="text-[var(--color-foreground-secondary)] mb-4 text-sm">
                                Una experiencia visual moderna y audaz, ideal para agencias de diseño. Presenta los servicios con presencia profesional.
                            </p>
                            <a
                                href="https://demo1.vercel.app"
                                target="_blank"
                                className="inline-block px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white"
                            >
                                Ver demo
                            </a>
                        </div>
                    </div>

                    <div className="my-8">
                        <div className="rounded-md overflow-hidden">
                            <Image
                                src="/demos/demo3.png"
                                alt="Demo 2"
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-[var(--color-foreground)]">
                                Tradición, carácter y sabor
                            </h3>
                            <p className="text-[var(--color-foreground-secondary)] mb-4 text-sm">
                                Una web con estética artesanal y energía contemporánea. Perfecta para conectar con la comunidad y destacar su autenticidad.
                            </p>
                            <a
                                href="https://demo1.vercel.app"
                                target="_blank"
                                className="inline-block px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white"
                            >
                                Ver demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demos;