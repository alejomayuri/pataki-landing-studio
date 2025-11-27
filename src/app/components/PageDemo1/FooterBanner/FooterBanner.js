import style from './FooterBanner.module.css';
import Phone from '../../icons2/demoIcons/Phone';
import Mail from '../../icons2/demoIcons/Mail';

export const FooterBanner = () => {
    return (
        <section className={style.container} id="contact">
            <div className={style.footerBannerWrapper} style={{
                backgroundImage: "url(/demos/demosPublic/footerImage1.jpg)"
            }}>
                <h2 className={style.title}>Suelta esa cuchara y disfruta de tu evento.</h2>
                <p className={style.subtitle}>Las cenas se disfrutan mejor con amigos.</p>
                <p className={style.subtitle}>Reserva ahora y déjanos las molestias domésticas a nosotros.</p>
                <div className={style.contactWrapper}>
                    <p className={style.subtitle}>COMUNÍCATE CON NOSOTROS</p>
                    <div className={style.contact}>
                        <span>
                            <Phone width={20} height={20} fill={"none"} stroke={"#fff"} />
                        </span>
                        <p>+51 987654321</p>
                    </div>
                    <div className={style.contact}>
                        <span>
                            <Mail width={20} height={20} fill={"none"} stroke={"#fff"} />
                        </span>
                        <p>
                            pataki@landingpage.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterBanner;