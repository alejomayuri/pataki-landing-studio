'use client';

import { useState } from "react";
import Close from "../components/icons2/demoIcons/Close";

export default function RequestLanding() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      const formulario = event.currentTarget;

      const formData = new FormData(formulario);
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
          formulario.reset(); 
      } else {
          setResult("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      }
};

  return (
    <main className="px-4 pt-36 pb-24 max-w-2xl mx-auto">
      {/* Intro */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-6 text-foreground text-center md:text-left">
          Ponte en{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              contacto
          </span>{" "}
          con{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              nosotros
          </span>{" "}
        </h1>
        <p className="text-[var(--color-foreground-secondary)] font-sans text-base sm:text-lg max-w-3xl text-center md:text-left mx-auto md:mx-0">
          Cuéntanos brevemente tu idea. Te responderemos personalmente para hablar sobre tu proyecto y crear la landing page perfecta para ti.
        </p>
      </section>

      {/* Form */}
      <section>
        <form className="space-y-10" onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          {/* Datos básicos */}
          <fieldset className="space-y-6 mb-16">
            <legend className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080] font-bold text-sm uppercase tracking-widest text-neutral-400">
              Datos básicos
            </legend>

            <div className="space-y-2">
              <input
                type="text"
                placeholder="Nombre *"
                className="w-full px-4 py-3 rounded-md border-b-2 border-[var(--color-galaxy-start)] focus:outline-none"
                name="name"
                required
              />
            </div>

            <div className="space-y-2">
              <input
                type="email"
                placeholder="Correo electrónico *"
                className="w-full px-4 py-3 rounded-md border-b-2 border-[#BB33A8] focus:outline-none"
                name="email"
                required
              />
            </div>

            <div className="space-y-2">
              <input
                type="text"
                placeholder="Teléfono"
                className="w-full px-4 py-3 rounded-md border-b-2 border-[var(--color-galaxy-end)] focus:outline-none"
                name="phone"
              />
            </div>
          </fieldset>

          {/* Proyecto */}
          <fieldset className="space-y-6 mb-16">
            <legend className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080] font-bold text-sm uppercase tracking-widest text-neutral-400">
              Proyecto
            </legend>

            <div className="space-y-2">
              <label className="text-sm">Tipo de proyecto *</label>
              <select 
                className="w-full px-4 py-3 rounded-md border-b-2 border-[var(--color-galaxy-start)] focus:outline-none"
                name="projectType"
                required
              >
                <option className="bg-[#0a0a0a] text-white" value="">Selecciona una opción</option>
                <option className="bg-[#0a0a0a] text-white">Proyecto personal</option>
                <option className="bg-[#0a0a0a] text-white">Negocio / emprendimiento</option>
                <option className="bg-[#0a0a0a] text-white">Marca personal</option>
                <option className="bg-[#0a0a0a] text-white">Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Objetivo *</label>
              <select 
                className="w-full px-4 py-3 rounded-md border-b-2 border-[#BB33A8] focus:outline-none"
                name="objective"
                required
              >
                <option className="bg-[#0a0a0a] text-white" value="">Selecciona una opción</option>
                <option className="bg-[#0a0a0a] text-white">Vender</option>
                <option className="bg-[#0a0a0a] text-white">Conseguir contactos</option>
                <option className="bg-[#0a0a0a] text-white">Presencia online</option>
                <option className="bg-[#0a0a0a] text-white">Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Cuéntanos la idea *</label>
              <textarea
                rows={4}
                placeholder="Qué quieres comunicar, a quién va dirigida, etc."
                className="
                  w-full px-4 py-3 rounded-md border-b-2 border-[var(--color-galaxy-end)] focus:outline-none resize-none
                "
                name="idea"
                required
              />
            </div>
          </fieldset>

          {/* Alcance */}
          <fieldset className="space-y-6 mb-16">
            <legend className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080] font-bold text-sm uppercase tracking-widest text-neutral-400">
              Alcance
            </legend>

            <div className="space-y-2">
              <label className="text-sm">Presupuesto *</label>
              <select className="w-full px-4 py-3 rounded-md border-b-2 border-[var(--color-galaxy-start)] focus:outline-none"
                name="budget"
                required
              >
                <option className="bg-[#0a0a0a] text-white" value="">Rango aproximado</option>
                <option className="bg-[#0a0a0a] text-white">Menos de $300</option>
                <option className="bg-[#0a0a0a] text-white">$300 – $600</option>
                <option className="bg-[#0a0a0a] text-white">Más de $600</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Plazo *</label>
              <select className="w-full px-4 py-3 rounded-md border-b-2 border-[#BB33A8] focus:outline-none"
                name="timeline"
                required
              >
                <option className="bg-[#0a0a0a] text-white" value="">Selecciona</option>
                <option className="bg-[#0a0a0a] text-white">Lo antes posible</option>
                <option className="bg-[#0a0a0a] text-white">1–2 semanas</option>
                <option className="bg-[#0a0a0a] text-white">Flexible</option>
              </select>
            </div>
          </fieldset>

          {/* CTA */}
          <div>
            <button
              type="submit"
              className="disabled:opacity-50 disabled:cursor-not-allowed w-full font-display cursor-pointer bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-4 py-2 sm:py-3 rounded-xl text-sm sm:text-sm md:text-base font-medium hover:from-[#FF0080] hover:to-[#7928CA] transition-colors duration-300 inline-block"
              disabled={loading || showMessage}
            >
              ENVIAR MENSAJE
            </button>

            <p className="text-xs text-neutral-400 text-center mt-4">
              Respuesta humana. Rápida y sin spam.
            </p>
          </div>
        </form>
        {loading && (
            <p className="text-left text-lg text-white font-sans text-center mt-8">
                Enviando...
            </p>
        )}
        {showMessage && (
            <div className="relative max-w-full text-left text-lg text-white font-sans text-center mt-8 bg-gradient-to-r from-[#7928CA] to-[#FF0080] p-4 rounded-lg">
                <Close fill='#fff' stroke='#fff' width={35} height={35} className="absolute md:top-1 md:right-1 top-0 right-0 cursor-pointer p-[5px]" onClick={() => setShowMessage(false)} />
                <p className="text-left text-lg text-white font-sans text-center">
                    {result}
                </p>
            </div>
        )}
      </section>
    </main>
  );
}
