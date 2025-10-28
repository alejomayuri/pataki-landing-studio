import React from "react";
import Image from "next/image";

const Demos = () => {
    return (
        <section className="flex flex-col bg-background py-16">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-6 text-center text-foreground">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        Explora
                    </span>{" "}
                    lo que podemos{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        crear
                    </span>{" "}
                    juntos
                </h2>

                <p className="text-foreground font-sans text-center text-base sm:text-lg max-w-2xl mx-auto">
                    Diseñamos, desarrollamos y optimizamos experiencias que impulsan tu negocio. Landings pensadas para atraer, convertir, posicionar y crecer contigo.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {[
                        {
                            src: "/demos/demo1.png",
                            alt: "Demo 1",
                            title: "Sabores que conquistan",
                            desc: "Una web elegante y cálida para servicios gastronómicos. Diseñada para transmitir confianza y comodidad.",
                            link: "https://demo1.vercel.app",
                        },
                        {
                            src: "/demos/demo2.png",
                            alt: "Demo 2",
                            title: "Diseño que transforma",
                            desc: "Una experiencia visual moderna y audaz, ideal para agencias de diseño. Presenta los servicios con presencia profesional.",
                            link: "https://demo1.vercel.app",
                        },
                        {
                            src: "/demos/demo3.png",
                            alt: "Demo 3",
                            title: "Tradición, carácter y sabor",
                            desc: "Una web con estética artesanal y energía contemporánea. Perfecta para conectar con la comunidad y destacar su autenticidad.",
                            link: "https://demo1.vercel.app",
                        },
                    ].map((demo) => (
                        <div key={demo.title} className="my-4 sm:my-8 flex flex-col items-center sm:items-start">
                            <div className="rounded-md overflow-hidden w-full max-w-md mx-auto">
                                <Image
                                    src={demo.src}
                                    alt={demo.alt}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                            <div className="p-4 sm:p-6 text-center sm:text-left">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[var(--color-foreground)]">
                                    {demo.title}
                                </h3>
                                <p className="text-[var(--color-foreground-secondary)] mb-4 text-sm sm:text-base">
                                    {demo.desc}
                                </p>
                                <a
                                    href={demo.link}
                                    target="_blank"
                                    className="inline-block px-5 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white"
                                >
                                    Ver demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Demos;
