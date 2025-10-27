"use client";

import React from "react";
import style from "./Prices.module.css";

const PLANS = [
  {
    title: "Esencial",
    price: "$ 100",
    description:
        "Perfecta para marcas o profesionales que necesitan una presencia online rápida y efectiva.",
    features: [
        "Landing page responsiva (Home + 1 vista personalizada)",
        "Diseño profesional y adaptado a tu marca",
        "Optimizada para móviles y SEO básico",
        "Formulario de contacto básico y redes sociales",
        "No aplica suscripción mensual",
    ],
    highlight: false,
  },
  {
    title: "Profesional",
    price: "$ 200",
    description:
        "Ideal para negocios que buscan destacar con una web más completa y personalizable.",
    features: [
        "Landing page responsiva (3-5 vistas personalizadas)",
        "Diseño exclusivo y adaptado a tu marca",
        "SEO avanzado y optimización de velocidad",
        "Formulario de contacto profesional",
        "Soporte técnico",
        "Aplica suscripción mensual",
    ],
    highlight: true,
  },
  {
    title: "Premium",
    price: "$ 280",
    description:
      "Pensada para proyectos en crecimiento que necesitan actualizaciones y soporte continuo.",
    features: [
        "Landing page responsiva y escalable (5+ vistas personalizadas)",
        "Diseño exclusivo y adaptado a tu marca",
        "SEO avanzado, formulario profesional y optimización de velocidad",
        "Actualización de contenido continua y soporte técnico",
        "Aplica suscripción mensual",
    ],
    highlight: false,
  },
];


const Prices = () => {
    return (
        <>
        <section id="precios" className="py-24 bg-background-secondary text-[var(--color-foreground)]">
            <div className="w-6xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6 max-w-full text-left text-foreground">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">Planes</span>
                    {' '} que se {' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">adaptan</span>
                    {' '} a tu proyecto
                </h2>
                <p className="text-foreground font-sans max-w-2xl text-left text-lg mb-20">
                    Elige el paquete que mejor se ajuste a tu visión y empieza a construir una presencia digital que convierte.
                </p>

                <div className={`grid md:grid-cols-3 gap-8 ${style.planGrid}`}>
                    {PLANS.map((plan) => (
                        <div
                            key={plan.title}
                            className={`rounded-2xl p-8 border ${
                                plan.highlight
                                ? "bg-gradient-to-br from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] border-none text-foreground shadow-xl scale-107"
                                : "border-[var(--color-galaxy-start)] bg-[var(--color-background-secondary)]"
                            } transition-transform duration-300`}
                        >
                            <h3 className="text-2xl font-semibold mb-2 font-display text-foreground">{plan.title}</h3>
                            <p className="text-4xl font-bold mb-4 font-display text-foreground">{plan.price}</p>
                            <p className="text-sm mb-6">{plan.description}</p>
                            <ul className="text-sm space-y-2 mb-8">
                                {plan.features.map((feature) => (
                                <li key={feature}>• {feature}</li>
                                ))}
                            </ul>
                            <a
                                className={`px-5 py-3 flex max-w-fit cursor-pointer rounded-md font-medium transition-colors duration-300 ${
                                plan.highlight
                                    ? "bg-white text-black hover:bg-gray-200"
                                    : `text-foreground font-display  ${style.infinite_galaxy}`
                                }`}
                            >
                                <p>Solicitar ahora</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="bg-white text-gray-900 py-20 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Transformemos tu idea en una web lista para despegar
  </h2>
  <p className="text-gray-600 max-w-xl mx-auto mb-8">
    Creamos landing pages con propósito: diseño profesional, rendimiento optimizado
    y resultados reales para tu negocio o marca personal.
  </p>
  <button className="bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200">
    Hablemos de tu proyecto
  </button>
</section>
<footer className="bg-[#0D0D0F] text-gray-400 py-12 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="text-center md:text-left">
      <h3 className="text-xl font-semibold text-white">
        <span className="bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] bg-clip-text text-transparent">
          pataki.io
        </span>
      </h3>
      <p className="text-sm mt-2 text-gray-500">
        Creamos herramientas para poner el mundo en tus manos.
      </p>
    </div>

    <ul className="flex gap-6 text-sm">
      <li>
        <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
      </li>
      <li>
        <a href="#demos" className="hover:text-white transition-colors">Demos</a>
      </li>
      <li>
        <a href="#planes" className="hover:text-white transition-colors">Planes</a>
      </li>
      <li>
        <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
      </li>
    </ul>
  </div>

  <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-600">
    © {new Date().getFullYear()} pataki.io — Todos los derechos reservados.
  </div>
</footer>
        </>
    );
};

export default Prices;