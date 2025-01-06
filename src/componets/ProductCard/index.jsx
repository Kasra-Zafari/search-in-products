import classes from "./index.module.css"

const ProductCard = (props) => {
    const { id, title, price, description, category, image, rating, rate, count } = props
    return (
        <>
            <h2>{props.selectedCategory}</h2>

            <a href="#">
                <div className={classes.card}>
                    <div className={classes.img}>
                        <img src={image} alt="" width="120px" />
                    </div>
                    <div className={classes.caption}>
                        <h5 className={classes.title}>{title}</h5>
                        <p>{category}</p>
                        <p className={classes.price1}>{price}$</p>
                        <p>Rate: {rate}</p>
                    </div>
                </div>
            </a>
        </>
    )
}
export default ProductCard;