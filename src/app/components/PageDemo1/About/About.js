import style from './About.module.css';

export const About = () => {
    return (
        <section className={style.container} id="about">
            <div className={style.aboutWrapper}>
                <h2 className={style.aboutTitle}>Tu traes a los invitados, nosotros hacemos el resto.</h2>
                <div className={style.articlesWrapper}>
                    <article className={style.article}>
                        <div className={style.aboutImageWrapper}>
                            <img src="/demos/demosPublic/about1.jpg" />
                        </div>
                        <h3>Tarifa gourmet de temporada</h3>
                        <p>Nuestro equipo de distinguidos chefs elaborará un menú hecho a medida para satisfacer las necesidades de su fiesta.</p>
                    </article>
                    <article className={style.article}>
                        <div className={style.aboutImageWrapper}>
                            <img src="/demos/demosPublic/about2.jpg" />
                        </div>
                        <h3>Decoración y Presentación</h3>
                        <p>Con decoración y adornos contemporáneos hechos a mano, transformamos el espacio de su fiesta para crear una atmósfera de sofisticación.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About;