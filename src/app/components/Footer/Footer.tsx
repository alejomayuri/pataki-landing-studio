import PhoneIcon from "../Icons/Phone";
import MailIcon from "../Icons/Mail";
import WhatsappIcon from "../Icons/WhatsappIcon";
import InstagramIcon from "../Icons/InstagramIcon";

export default function Footer() {

  return (
    <footer className="bg-[#0D0D0F] text-gray-400 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white">
              <span className="bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] bg-clip-text text-transparent">
                pataki.io
              </span>
            </h3>
            <p className="text-sm mt-2 text-gray-500">
              Creamos herramientas para poner el mundo en tus manos.
            </p>
          </div>

        <div className="flex flex-col items-center md:items-end gap-8">
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm">
                <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                    Servicios
                </a>
                </li>
                <li>
                <a href="#demos" className="hover:text-white transition-colors">
                    Demos
                </a>
                </li>
                <li>
                <a href="#planes" className="hover:text-white transition-colors">
                    Planes
                </a>
                </li>
                <li>
                <a href="#precios" className="hover:text-white transition-colors">
                    Precios
                </a>
                </li>
                <li>
                <a href="/solicita-tu-landing" className="hover:text-white transition-colors">
                    Solicita tu landing
                </a>
                </li>
            </ul>

            <div className="flex sm:flex-row justify-center gap-6 text-sm">
                    <a href="mailto:contacto@pataki.io" className="hover:text-white transition-colors flex items-center gap-2">
                        <MailIcon className="w-6 h-6" />
                    </a>
                    <a href="tel:+1234567890" className="hover:text-white transition-colors flex items-center gap-2">
                        <PhoneIcon className="w-6 h-6" />
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                        <WhatsappIcon className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/pataki.io" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                        <InstagramIcon className="w-7 h-7" />
                    </a>
                </div>
            </div>
        </div>

        {/*Contacto*/}
            

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} pataki.io — Todos los derechos reservados.
        </div>
      </footer>
  );
}