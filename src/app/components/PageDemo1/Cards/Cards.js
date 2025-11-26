import style from './Cards.module.css';
import ChefHat from '../../icons/demoIcons/ChefHat';
import Silverware from '../../icons/demoIcons/Silverware';
import Martini from '../../icons/demoIcons/Martini';

export const Cards = () => {
    return (
        <section className={style.container}>
            <div className={style.cardsWrapper}>
                <div className={style.card}>
                    <div>
                        <ChefHat width={80} height={80} />
                    </div>
                    <h3>Los mejores cocineros de Melbourne</h3>
                    <p>Nuestro equipo de chefs altamente capacitados se dedica a crear experiencias gastronómicas innovadoras. Los comentarios de nuestros clientes hablan por sí solos.</p>
                </div>
                <div className={style.card}>
                    <div>
                        <Silverware stroke={"#A68B7C"} width={80} height={80} fill={"#A68B7C"} />
                    </div>
                    <h3>Platos frescos, preparados en el sitio</h3>
                    <p>Tenga la seguridad de que la comida de sus invitados no se habrá quedado en el tráfico de camino a la cena. Todos nuestros platos se preparan en el momento de servir.</p>
                </div>
                <div className={style.card}>
                    <div>
                        <Martini stroke={"#A68B7C"} width={80} height={80} fill={"#A68B7C"} />
                    </div>
                    <h3>Cóctel con estilo para tu evento</h3>
                    <p>Nuestros equipo de creativos bartenders traen a su mesa las mejores mezclas de bebidas frescas, divertidas y adecuadas. ¿Alguien quiere un Gin Mickeys?</p>
                </div>
            </div>
        </section>
    )
}

export default Cards;
