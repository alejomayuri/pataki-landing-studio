import style from './AnotherMidBanner.module.css';

export const AnotherMidBanner = () => {
    return (
        <section className={style.container}>
            <div className={style.bannerWrapper}>
                <div className={style.bannerContent}>
                    <div>
                        <h2>Catering profecional para tu gran día.</h2>
                        <p className={style.subtitle}>
                            Sabemos lo importantes que son los pequeños detalles cuando se trata de tu día especial. La comida y el catering pueden hacer o deshacer la experiencia de la boda para usted y sus invitados. Confíe a nuestro experimentado equipo el catering del día de su boda.
                        </p>
                    </div>
                </div>
                <div className={style.bannerImageWrapper}>
                    <div className={style.bannerImage}>
                        <img src="/demos/demosPublic/midbanner2.jpg" alt="banner" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnotherMidBanner;