import style from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={style.footerWrapper}>
                <p>Desarrollado por</p>
                <div className={style.logoWrapper}>
                    <img src="/demos/demosPublic/pataki.png" alt="logo" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;