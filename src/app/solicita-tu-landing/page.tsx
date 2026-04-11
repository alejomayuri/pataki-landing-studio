export default function RequestLanding() {
  return (
    <main className="px-4 pt-16 pb-24 max-w-2xl mx-auto">
      {/* Intro */}
      <section className="mb-12">
        <h1 className="text-3xl font-semibold leading-tight mb-4">
          Solicita tu landing
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed">
          Cuéntame brevemente tu idea. Te responderé personalmente para ver si
          encajamos y cómo puedo ayudarte.
        </p>
      </section>

      {/* Form */}
      <section>
        <form className="space-y-10">
          {/* Datos básicos */}
          <fieldset className="space-y-6">
            <legend className="text-xs uppercase tracking-widest text-neutral-400">
              Datos básicos
            </legend>

            <div className="space-y-2">
              <label className="text-sm">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                required
                className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                required
                className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm focus:outline-none focus:border-neutral-900"
              />
            </div>
          </fieldset>

          {/* Proyecto */}
          <fieldset className="space-y-6">
            <legend className="text-xs uppercase tracking-widest text-neutral-400">
              Proyecto
            </legend>

            <div className="space-y-2">
              <label className="text-sm">Tipo de proyecto</label>
              <select className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm focus:outline-none">
                <option value="">Selecciona una opción</option>
                <option>Proyecto personal</option>
                <option>Negocio / emprendimiento</option>
                <option>Marca personal</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Objetivo</label>
              <select className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm focus:outline-none">
                <option value="">Selecciona una opción</option>
                <option>Vender</option>
                <option>Conseguir contactos</option>
                <option>Presencia online</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Cuéntame la idea</label>
              <textarea
                rows={4}
                placeholder="Qué quieres comunicar, a quién va dirigida, etc."
                className="w-full border border-neutral-300 bg-transparent p-3 text-sm focus:outline-none focus:border-neutral-900 resize-none"
              />
            </div>
          </fieldset>

          {/* Alcance */}
          <fieldset className="space-y-6">
            <legend className="text-xs uppercase tracking-widest text-neutral-400">
              Alcance
            </legend>

            <div className="space-y-2">
              <label className="text-sm">Presupuesto</label>
              <select className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm focus:outline-none">
                <option value="">Rango aproximado</option>
                <option>Menos de $300</option>
                <option>$300 – $600</option>
                <option>Más de $600</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Plazo</label>
              <select className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm focus:outline-none">
                <option value="">Selecciona</option>
                <option>Lo antes posible</option>
                <option>1–2 semanas</option>
                <option>Flexible</option>
              </select>
            </div>
          </fieldset>

          {/* CTA */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full py-4 text-sm uppercase tracking-widest border border-neutral-900 hover:bg-neutral-900 hover:text-white transition"
            >
              Enviar solicitud
            </button>

            <p className="text-xs text-neutral-400 text-center mt-4">
              Respuesta humana. Sin spam. Sin compromiso.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
