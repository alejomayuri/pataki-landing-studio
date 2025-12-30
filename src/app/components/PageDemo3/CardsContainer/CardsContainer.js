import style from './CardsContainer.module.css';
import Card from './Card/Card';
import { title } from 'node:process';



const CardsContainer = ({ data }) => {
  return (
    <section className={style.cardsContainer}>
        <div className={style.cardsContainer}>
            {data.map(card => (
                <Card 
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div> 
    </section>
  );
};

export default CardsContainer;
