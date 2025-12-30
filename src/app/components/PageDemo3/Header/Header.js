import style from './Header.module.css';
import Menu from '../../icons2/demoIcons/Menu';
// import DropdownMenu from '../DropdownMenu/DropdownMenu';

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div>
                    <nav className={style.nav}>
                        <ul>
                            <li><a href="#">Tienda</a></li>
                            <li><a href="#about">Explorar</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </nav>
                    <div className={style.logoWrapper}>
                        <img src="/demos/demosPublic/demo3/pataki-western-b.png" alt="logo" />
                    </div>
                    <div className={style.contacto}>
                        <div className={style.contactBtn}>
                            <a href="#">
                                CONTÁCTANOS
                            </a>
                        </div>
                        {/* <div className={style.dropdownMenu}>
                            <DropdownMenu />
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;