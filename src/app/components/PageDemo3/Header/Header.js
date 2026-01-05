'use client';
import { useState } from 'react';
import style from './Header.module.css';
import Menu from '../../icons2/demoIcons/Menu';
import InstagramTwo from '../../icons2/demoIcons/InstagramTwo';
import WhatsappIcon from '../../icons2/WhatsappIcon';
import TikTokIcon from '../../icons2/demoIcons/TikTokIcon';
import Close from '../../icons2/demoIcons/Close';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

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
                    <div className={style.menuIcon} onClick={handleMenuClick}>
                        <Menu stroke="#000" />
                    </div>
                    <div className={style.logoWrapper}>
                        <img src="/demos/demosPublic/demo3/pataki-western-b.png" alt="logo" />
                    </div>
                    <div className={style.contacto}>
                        <div className={style.contactBtn}>
                            <a href="#">
                                CONTÁCTANOS
                            </a>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className={style.mobileMenu}>
                        <div>
                            <div className={style.closeIcon} onClick={handleMenuClick}>
                                <Close fill='#000' stroke='#000' width={32} height={32} />
                            </div>
                        </div>
                        <div className={style.menuContent}>
                            <div className={style.menuContentItems}>
                                <ul>
                                    <li><a href="#">Tienda</a></li>
                                    <li><a href="#about">Explorar</a></li>
                                    <li><a href="#contact">Contacto</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Historia</a></li>
                                    <li><a href="#">Sobre nosotros</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className={style.social}>
                                <a href="#">
                                    <InstagramTwo width={32} height={32} />
                                </a>
                                <a href="#">
                                    <WhatsappIcon width={32} height={32} fill='#000' />
                                </a>
                                <a href="#">
                                    <TikTokIcon width={32} height={32} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;