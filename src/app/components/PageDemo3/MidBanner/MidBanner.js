import style from './MidBanner.module.css';

const MidBanner = () => {
  return (
    <section className={style.midBanner}>
        <div className={style.midBannerContainer}>
            <div className={style.imageContainer}>
                <img src="demos/demosPublic/demo3/mid-banner-1.jpg" alt="Mid Banner" />
            </div>
            <div className={style.content}>
                <div className={style.imageContentContainer}>
                    <img src="demos/demosPublic/demo3/mid-banner-content-1.png" alt="Mid Banner Content" />
                </div>
            </div>
            <div className={style.bannerFooter}>
                <a href="#">EXPLORA LA COLECCIÓN</a>
            </div>
        </div> 
    </section>
  );
};

export default MidBanner;
