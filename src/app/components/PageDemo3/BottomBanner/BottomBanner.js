import style from './BottomBanner.module.css';

const BottomBanner = () => {
  return (
    <section className={style.bottomBanner}>
        <div className={style.bottomBannerContainer}>
            <div className={style.imageContainer}>
                <img src="demos/demosPublic/demo3/bottom-banner.jpg" alt="Mid Banner" />
            </div>
            <div className={style.content}>
                <div className={style.contentContainer}>
                    <h3>LA COLECCIÓN ESCAPE</h3>
                    <p>DISEÑADO PARA SOBREVIVIR A VUELOS DE NOCHE, TRENES DE LA JUNGLA, CERVEZAS DE AZOTEA, MAÑANAS DESCONGELADAS Y DECISIONES CUESTIONABLES.</p>
                </div>
            </div>
            <div className={style.bannerFooter}>
                <a href="#">EXPLORA LA COLECCIÓN</a>
            </div>
        </div> 
    </section>
  );
};

export default BottomBanner;
