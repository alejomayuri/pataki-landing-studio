import React from "react";
import Link from "next/link";
import WhatsappIcon from "../icons2/WhatsappIcon";

const WhatsAppGeneralBtn = () => {
    return (
        <Link 
            href="https://wa.me/979364254" 
            target="_blank" 
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-50 group"
        >
            <span className="absolute inset-0 rounded-full border-3 border-[#7928CA] animate-[ping_4s_ease-out_infinite] opacity-50"></span>
            <span className="absolute inset-0 rounded-full border-2 border-[#FF0080] animate-[ping_4s_ease-out_infinite_1s] opacity-30"></span>

            <div className="relative bg-gradient-to-br from-[#7928CA] to-[#FF0080] text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12 flex items-center justify-center">
                <WhatsappIcon className="w-7 h-7" fill="#fff" />

                <span className="absolute right-16 bg-foreground text-background text-xs font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    ¿Hablamos?
                </span>
            </div>
        </Link>
    );
};

export default WhatsAppGeneralBtn;