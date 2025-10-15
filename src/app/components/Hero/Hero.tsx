import React from "react";

type HeroProps = {
  ctaText?: string;
  onCtaClick?: () => void;
};

const Hero: React.FC<HeroProps> = ({ ctaText = "Solicita tu landing", onCtaClick }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-background text-[#F5F5F7]"
        style={{
            backgroundImage: "url('/bgimg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed",
        }}
    >
      
      {/* Slogan */}
      <h1 className="text-4xl md:text-7xl font-display leading-tight mb-6 max-w-6xl">
            Creamos herramientas para poner el{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">mundo</span>{" "}
            en tus{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">manos</span>
      </h1>

      {/* Subtítulo */}
      <p className="font-display bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080] text-lg md:text-xl max-w-3xl mb-8">
        Creamos landing pages diseñadas para convertir y hacer crecer tu negocio, con diseño profesional y SEO optimizado.
      </p>

      {/* CTA */}
      {ctaText && (
        <button
          onClick={onCtaClick}
          className="px-6 py-3 rounded-lg bg-gradient-galaxy font-display hover:opacity-90 transition"
        >
          {ctaText}
        </button>
      )}
    </section>
  );
};

export default Hero;
