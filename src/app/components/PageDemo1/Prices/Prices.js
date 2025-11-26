import style from './Prices.module.css';

export const Prices = () => {
    return (
        <section className={style.container} id="prices">
            <h2 className={style.title}>Elimina las molestias.</h2>
            <div className={style.cardsWrapper}>
                <div className={style.card}>
                    <p className={style.headerCard}>DOS TIEMPOS</p>
                    <div className={style.price}>
                        <p className={style.currency}>S/.</p>
                        <p className={style.number}>59</p>
                        <p className={style.extra}>/pp</p>
                    </div>
                    <h3>Genial para almuerzos</h3>
                    <ul>
                        <li>Copa de vino de cortesía</li>
                        <li>Elección de entrante o postre</li>
                        <li>1:20 Camareros</li>
                    </ul>
                </div>
                <div className={style.card}>
                    <p className={style.headerCard}>TRES TIEMPOS / BODAS</p>
                    <div className={style.price}>
                        <p className={style.currency}>S/.</p>
                        <p className={style.number}>89</p>
                        <p className={style.extra}>/pp</p>
                    </div>
                    <h3>Ideal para cenas de invitados</h3>
                    <ul>
                        <li>Champán de cortesía</li>
                        <li>Servicio de bar en el lugar</li>
                        <li>1:8 Camareros</li>
                    </ul>
                </div>
                <div className={style.card}>
                    <p className={style.headerCard}>DEGUSTACIÓN</p>
                    <div className={style.price}>
                        <p className={style.currency}>S/.</p>
                        <p className={style.number}>129</p>
                        <p className={style.extra}>/pp</p>
                    </div>
                    <h3>Ideal para grupos grandes</h3>
                    <ul>
                        <li>Cóctel de cortesía</li>
                        <li>Bartender en el sitio</li>
                        <li>1:4 Camareros</li>
                    </ul>
                </div>
            </div>
            <p className={style.footer}>¿Necesita más información? <a href="#"><b>Ponte en contacto</b></a> para conocer precios personalizados.</p>
        </section>
    )
}

export default Prices;
