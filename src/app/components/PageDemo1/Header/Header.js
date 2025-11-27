import style from './Header.module.css';
import Menu from '../../icons2/demoIcons/Menu';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div>
                    <div className={style.logoWrapper}>
                        <img src="/demos/demosPublic/demo1_logo.png" alt="logo" />
                    </div>
                    <nav className={style.nav}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">Sobre nosotros</a></li>
                            <li><a href="#prices">Precios</a></li>
                            <li><a href="#contact">Contacto</a></li>
                            <li><a href="#social">Social</a></li>
                        </ul>
                    </nav>
                    <div className={style.contacto}>
                        <div className={style.contactBtn}>
                            <a href="#">
                                Contáctanos
                            </a>
                        </div>
                        <div className={style.dropdownMenu}>
                            <DropdownMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;