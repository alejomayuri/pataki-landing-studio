import style from './Card.module.css';

const Cards = ({ image, title, description }) => {
    return (
        <div className={style.cardContainer}>
            <img src={image} alt="Card" />
            <div className={style.cardContent}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={style.cardFooter}>
                <a href="#">COMPRAR AHORA</a>
            </div>
        </div>
    );
};

export default Cards;
