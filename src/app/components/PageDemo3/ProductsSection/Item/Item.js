import style from './Item.module.css';

const ProductItem = ({ name, image, price, colors, isNew = false }) => {
    return (
        <div className={style.productItem}>
            {isNew && <div className={style.newBadge}>Nuevo</div>}
            <div className={style.imageContainer}>
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{price}</p>
            <div className={style.colorOptions}>
                {colors.map((color, index) => (
                    <span key={index} className={style.colorCircle} style={{ backgroundColor: color }}></span>
                ))}
            </div>
        </div>
    )
}

export default ProductItem;
