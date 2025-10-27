import React from "react";

const Cta = () => {
    return (
        <>
        <section className="flex flex-col bg-background-secondary py-16">
            <div className="w-6xl mx-auto px-6 ">
                <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6 max-w-full text-left text-foreground">
                    Convierte tus {' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">ideas</span>
                    {' '} en una landing que {' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">impulse</span>
                    {' '} tu negocio
                </h2>
                <p className="text-foreground font-sans max-w-4xl text-left text-lg">
                    En Pataki Landing Studio transformamos conceptos en experiencias digitales que venden.
                    Diseño, desarrollo y optimización pensados para destacar tu marca.
                </p>
                <div>
                    <a className="font-display cursor-pointer bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-8 py-6 rounded-xl text-2xl font-medium hover:from-[#FF0080] hover:to-[#7928CA] transition-colors duration-3000 inline-block mt-8 text-foreground">
                        Solicita tu landing
                    </a>
                </div>
            </div>
        </section>
        </>
    );
};

export default Cta;