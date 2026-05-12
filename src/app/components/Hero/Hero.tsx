import React from "react";
import Link from "next/link";

type HeroProps = {
  ctaText?: string;
  onCtaClick?: () => void;
};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative py-20 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen px-4 mt-8 bg-background text-[#F5F5F7] md:px-6"
          style={{
              backgroundImage: "url('/bgimg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
          }}
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">
        
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
          ¿Por qué necesitas una{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
            landing page{" "}
          </span>
          de{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
            Pataki
          </span>?
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 font-sans leading-relaxed">
          Si tu negocio no tiene una landing page, <strong>estás perdiendo dinero cada día</strong>. No es un lujo, es el lugar donde tus visitas finalmente se convierten en clientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl">
          {[
            "Convierte visitas en clientes",
            "Hace que tu publicidad funcione",
            "Controlas el mensaje al 100%",
            "Mide y analiza resultados",
            "Te da autoridad y claridad"
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#7928CA] to-[#FF0080] rounded-full flex items-center justify-center text-[10px] text-white">
                ✓
              </span>
              <span className="text-foreground font-medium text-base md:text-lg">{item}</span>
            </div>
          ))}
        </div>
        <Link
            href="/solicita-tu-landing"
            className="font-display cursor-pointer bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-10 py-5 rounded-xl text-lg sm:text-xl md:text-xl font-medium hover:from-[#FF0080] hover:to-[#7928CA] transition-colors duration-300 inline-block"
        >
            Solicita tu landing
        </Link>
      </div>
    </section>
  );
};

export default Hero;
