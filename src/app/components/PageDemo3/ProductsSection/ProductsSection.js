import style from "./ProductsSection.module.css";
import ProductItem from "./Item/Item";

const DATA = [
    {
        id: 1,
        name: "Pantalón clásico",
        image: "demos/demosPublic/demo3/product1.jpg",
        price: "S/. 100",
        colors: ["#E75F55", "#000000", "#FFFFFF"],
        isNew: true,
    },
    {
        id: 2,
        name: "Short clasico",
        image: "demos/demosPublic/demo3/product2.jpg",
        price: "S/. 150",
        colors: ["#9B9EAD", "#FFFFFF"],
    },
    {
        id: 3,
        name: "Short casual",
        image: "demos/demosPublic/demo3/product3.jpg",
        price: "S/. 200",
        colors: ["#FFFFFF", "#000"],
        isNew: true,
    },
    {
        id: 4,
        name: "Polo casual",
        image: "demos/demosPublic/demo3/product4.jpg",
        price: "S/. 250",
        colors: ["#fff", "#24a1a1ff", "#C0C0C0"],
        isNew: true,
    },
    {
        id: 5,
        name: "Polo sin mangas",
        image: "demos/demosPublic/demo3/product5.jpg",
        price: "S/. 300",
        colors: ["#000", "#800000", "#808000"],
    }
]

const ProductsSection = () => {
    return (
        <section className={style.productsSection}>
            <div className={style.productsContainer}>
                {DATA.map(product => (
                    <ProductItem 
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        colors={product.colors}
                        isNew={product.isNew}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProductsSection;
