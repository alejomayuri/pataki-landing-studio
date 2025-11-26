import style from './MidBanner.module.css';

export const MidBanner = () => {
    return (
        <section className={style.container}>
            <div className={style.bannerWrapper}>
                <div className={style.bannerImageWrapper}>
                    <div className={style.bannerImage}>
                        <img src="/demos/demosPublic/midbanner1.jpg" alt="banner" />
                    </div>
                </div>
                <div className={style.bannerContent}>
                    <div>
                        <h2>Sólo los mejores productos de origen local.</h2>
                        <p className={style.subtitle}>
                            Todos los ingredientes frescos de nuestros platos provienen de granjas locales y mercados agrícolas. Utilizar únicamente productos frescos y disponibles de temporada confiere a los platos que preparamos una autenticidad única.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MidBanner;