import style from './TestimonialItem.module.css';

const TestimonialItem = ({ text, name, image, isActive }) => (
    <div className={`${style.testimonial_item} ${isActive ? style.active : ''}`}>
        <p className={style.text}>{text}</p>
        <div className={style.author}>
            <div className={style.imageContainer}>
                <img src={image} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    </div>
);

export default TestimonialItem;