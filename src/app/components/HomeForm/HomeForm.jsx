const HomeForm = () => {
    return (
        <section id="demos" className="scroll-mt-16 flex flex-col bg-background py-12 md:py-16">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-6 text-foreground text-center md:text-left">
                    Ponte en{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        contacto
                    </span>{" "}
                    con{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        nosotros
                    </span>{" "}
                </h2>

                <p className="text-[var(--color-foreground-secondary)] font-sans text-base sm:text-lg max-w-3xl text-center md:text-left mx-auto md:mx-0">
                    Escríbenos y nos pondremos en contacto contigo para ayudarte a crear la web que necesitas.
                </p>

                <div className="mt-8 flex-col flex items-left justify-center md:justify-start gap-4">
                    <input
                        type="text"
                        placeholder="Nombre *"
                        className="w-full max-w-xl px-4 py-3 rounded-md border-b-2 border-[var(--color-galaxy-start)] focus:outline-none focus:border-transparent"
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico *"
                        className="w-full max-w-xl px-4 py-3 rounded-md border-b-2 border-[#BB33A8] focus:outline-none focus:border-transparent"
                    />
                    <input
                        type="text"
                        placeholder="Teléfono"
                        className="w-full max-w-xl px-4 py-3 rounded-md border-b-2 border-[var(--color-galaxy-end)] focus:outline-none focus:border-transparent"
                    />
                    <button className="w-full max-w-xl font-display cursor-pointer bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-4 py-2 sm:py-3 rounded-xl text-sm sm:text-sm md:text-base font-medium hover:from-[#FF0080] hover:to-[#7928CA] transition-colors duration-300 inline-block mt-4">
                        Enviar
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HomeForm;
