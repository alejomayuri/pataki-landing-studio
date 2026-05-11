import React from "react";
import Link from "next/link";

const Cta = () => {
    return (
        // <section id="contacto" className="flex flex-col bg-background-secondary py-12 md:py-16">
        //     <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        //         <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-6 text-foreground text-center md:text-left">
        //             ¿Por qué necesitas una {" "}
        //             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
        //                 landing page
        //             </span>
        //             ?
        //             {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
        //                 impulse
        //             </span>
        //             {" "} tu negocio */}
        //         </h2>

        //         <div className="flex-1 space-y-6">
        //             <p className="text-[var(--color-foreground)] font-sans text-base sm:text-lg max-w-3xl text-center md:text-left mx-auto md:mx-0">
        //                 Si tu negocio no tiene una landing page, estás perdiendo dinero cada día. No es un extra ni un lujo. Es donde tus visitas se convierten en clientes.
        //             </p>
        //             <ul className="space-y-4 text-foreground/80 font-sans text-base sm:text-lg">
        //                 <li className="flex items-center gap-3 justify-center md:justify-start">
        //                     <span className="text-[#7928CA]">✓</span> 
        //                     Convierte visitas en clientes.
        //                 </li>
        //                 <li className="flex items-center gap-3 justify-center md:justify-start">
        //                     <span className="text-[#9B34B9]">✓</span> 
        //                     Hace que tu publicidad funcione.
        //                 </li>
        //                 <li className="flex items-center gap-3 justify-center md:justify-start">
        //                     <span className="text-[#C134A5]">✓</span> 
        //                     Controlas el mensaje.
        //                 </li>
        //                 <li className="flex items-center gap-3 justify-center md:justify-start">
        //                     <span className="text-[#E12892]">✓</span> 
        //                     Mide y analiza todo.
        //                 </li>
        //                 <li className="flex items-center gap-3 justify-center md:justify-start">
        //                     <span className="text-[#FF0080]">✓</span> 
        //                     Te da autoridad y claridad.
        //                 </li>
        //             </ul>
        //         </div>

        //         {/* <p className="text-[var(--color-foreground)] font-sans text-base sm:text-lg max-w-3xl text-center md:text-left mx-auto md:mx-0">
        //             Descubre cómo una landing page bien diseñada puede impulsar tu negocio y convertir visitantes en clientes.
        //         </p> */}

        //         <div className="flex justify-center md:justify-start">
        //             <Link
        //                 href="/solicita-tu-landing"
        //                 className="font-display cursor-pointer bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-8 py-4 sm:py-5 rounded-xl text-lg sm:text-xl md:text-2xl font-medium hover:from-[#FF0080] hover:to-[#7928CA] transition-colors duration-300 inline-block mt-8"
        //             >
        //                 Solicita tu landing
        //             </Link>
        //         </div>
        //     </div>
        // </section>
        <section className="py-20 bg-background-secondary overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      <div className="w-full lg:w-1/2 space-y-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4 text-foreground">
            Tu presencia digital, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              bajo control.
            </span>
          </h2>
        </div>

        <div className="grid gap-8">
          <div className="flex gap-4">
            <span className="text-2xl font-display font-bold text-[#FF0080]">01.</span>
            <div>
              <h3 className="text-xl font-bold mb-1">Mobile-First por defecto</h3>
              <p className="text-foreground/70">El 90% de tus clientes navegan desde el móvil. Tu web no solo se verá bien, será una app nativa en sus manos.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-2xl font-display font-bold text-[#FF0080]">02.</span>
            <div>
              <h3 className="text-xl font-bold mb-1">Cero mantenimiento oculto</h3>
              <p className="text-foreground/70">Al usar tecnología moderna, eliminamos las actualizaciones costosas y los errores de servidores antiguos.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-2xl font-display font-bold text-[#FF0080]">03.</span>
            <div>
              <h3 className="text-xl font-bold mb-1">Resultados medibles</h3>
              <p className="text-foreground/70">Sabrás exactamente de dónde vienen tus clientes y cuántos hicieron clic en tu botón de WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative">
        <div className="bg-background p-8 rounded-3xl border border-white/5 shadow-2xl">
          <h4 className="text-sm font-sans uppercase tracking-[0.2em] text-foreground/40 mb-8">
            Ruta de Retención
          </h4>
          
          <div className="space-y-8">
            {/* Barra 1: Web Tradicional */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-sans">
                <span>Web Convencional (Lenta)</span>
                <span className="text-red-400">40% rebote</span>
              </div>
              <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-400 w-[60%] rounded-full"></div>
              </div>
            </div>

            {/* Barra 2: Pataki Landing */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-sans font-bold">
                <span className="text-[#FF0080]">Pataki Landing (Next.js)</span>
                <span className="text-[#7928CA]">98% retención</span>
              </div>
              <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#7928CA] to-[#FF0080] w-[98%] rounded-full shadow-[0_0_15px_rgba(121,40,202,0.5)]"></div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-center">
            <p className="text-sm text-foreground/60 italic">
              &ldquo;Cada segundo de carga reduce las conversiones en un 7%.&rdquo;
            </p>
          </div>
        </div>
        
        {/* Decoración abstracta de fondo */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7928CA]/10 blur-3xl rounded-full"></div>
      </div>

    </div>
  </div>
</section>
    );
};

export default Cta;
