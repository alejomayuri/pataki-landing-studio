import style from './Footer.module.css';
import Menu from '../../icons2/demoIcons/Menu';
// import DropdownMenu from '../DropdownMenu/DropdownMenu';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.formWrapper}>
                        <h3>Suscríbete a nuestro boletín</h3>
                        <form className={style.form}>
                            <input type="email" placeholder="Ingresa tu correo electrónico" />
                            <button type="submit">Suscribirse</button>
                        </form>
                    </div>
                    <div className={style.info}>
                        <h3>Enlaces</h3>
                        <a href="#">FAQ</a>
                        <a href="#">Servicio al cliente</a>
                        <a href="#">Términos y Condiciones</a>
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Contáctanos</a>
                    </div>
                    <div className={style.explore}>
                        <h3>Explorar</h3>
                        <a href="#">Sobre nosotros</a>
                        <a href="#">Historia</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className={style.socialMedia}>
                        <h3>Social</h3>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">tiktok</a>
                        <a href="#">youtube</a>
                    </div>
                </div>
                <div className={style.bottomBar}>
                    <p>© {year} Pataki Western Wear. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;