import style from './MainBanner.module.css';

const MainBanner = () => {
  return (
    <section className={style.mainBanner}>
      <div className={style.bannerVideo}>  
        <video
          src="demos/demosPublic/demo3/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={style.bannerText}>
          <p>
              Gear for the Escape. <br />
              The Journey is the Destination <br /><br />
              PATAKIWESTERN
          </p>
          <p>COMPRAR</p>
        </div>
      </div> 
    </section>
  );
};

export default MainBanner;
