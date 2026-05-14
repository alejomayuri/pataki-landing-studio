'use client';

import { useState } from "react";
import Close from "../icons2/demoIcons/Close";

const HomeForm = () => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [thankYouMessage, setThankYouMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        formData.append("access_key", "61b41e76-25a2-4e07-9269-995433395365");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        setLoading(false);
        setShowMessage(true);
        if (data.success) {
            setResult("Mensaje enviado con éxito, nos pondremos en contacto contigo pronto.");
            e.target.reset();
            setThankYouMessage(true);
        } else {
            setResult("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <section id="demos" className="scroll-mt-16 flex flex-col bg-background py-12 md:py-16">
            {thankYouMessage ? (
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-6 text-foreground text-center md:text-left">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        ¡Gracias {" "}
                        </span>
                        por tu {" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
                        mensaje!
                        </span>
                    </h2>
                    <p className="text-[var(--color-foreground-secondary)] font-sans text-base sm:text-lg max-w-3xl text-center md:text-left mx-auto md:mx-0">
                        Nos pondremos en contacto contigo pronto para hablar sobre tu proyecto.
                    </p>
                </div>
            ) : (
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

                    <form className="mt-8 flex-col flex items-left justify-center md:justify-start gap-4" onSubmit={handleSubmit}>
                        {/* Campo Honeypot invisible para humanos */}
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                        <input
                            type="text"
                            placeholder="Nombre *"
                            className="w-full max-w-xl px-4 py-3 rounded-md border-b-2 border-[var(--color-galaxy-start)] focus:outline-none"
                            name="name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Correo electrónico *"
                            className="w-full max-w-xl px-4 py-3 rounded-md border-b-2 border-[#BB33A8] focus:outline-none"
                            name="email"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Teléfono"
                            className="w-full max-w-xl px-4 py-3 rounded-md border-b-2 border-[var(--color-galaxy-end)] focus:outline-none"
                            name="phone"
                        />
                        <button disabled={loading || showMessage} className="disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-xl font-display cursor-pointer bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-4 py-2 sm:py-3 rounded-xl text-sm sm:text-sm md:text-base font-medium hover:from-[#FF0080] hover:to-[#7928CA] transition-colors duration-300 inline-block mt-4">
                            Enviar
                        </button>
                    </form>
                </div>
            )}
        </section>
    );
};

export default HomeForm;
