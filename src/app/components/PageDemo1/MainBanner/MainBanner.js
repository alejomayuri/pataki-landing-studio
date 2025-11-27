import style from './MainBanner.module.css';
import WhatsAppIcon from '../../icons2/demoIcons/WhatsAppIcon';
import FacebookIcon from '../../icons2/demoIcons/FacebookIcon';
import TikTokIcon from '../../icons2/demoIcons/TikTokIcon';

export const MainBanner = () => {
    return (
        <section className={style.section}>
            <div className={style.bannerWrapper}>
                <div className={style.bannerImage}>
                    <img src="/demos/demosPublic/banner1.jpg" alt="banner" />
                </div>
                <div className={style.bannerContent}>
                    <div>
                        <h1>Catering Gourmet para cualquier ocación.</h1>
                        <p className={style.subtitle}>
                            Tu siguiente evento social está en buenas manos con nuestro equipo de profesionales.
                        </p>
                        <div className={style.social}>
                            <p>Contáctanos en nuestras redes sociales:</p>
                            <div>
                                <WhatsAppIcon width={50} height={50} fill={"#A68B7C"}/>
                                <FacebookIcon width={55} height={55} fill={"#A68B7C"}/>
                                <TikTokIcon width={50} height={50} fill={"#A68B7C"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner;
