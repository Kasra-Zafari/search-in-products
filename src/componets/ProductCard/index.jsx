import { useState } from "react";
import classes from "./index.module.css"
import { useEffect } from "react";

const ProductCard = (props) => {

    const [products, setProducts] = useState([]);
    const [isProductsLoadind,setIsProductsLoading] = useState(false);


    useEffect(() => {
        if (props.selectedCategory) {
            setIsProductsLoading(true)
            fetch(`https://fakestoreapi.com/products/category/${props.selectedCategory}`)
                .then((res) => res.json())
                .then((data) => { setProducts(data) })
                .catch((error) => { alert("an error has been ocuured") })
                .finally(()=>{setIsProductsLoading(false)})
        }
    }, [props.selectedCategory])

    return (
        <>
            <h2>{props.selectedCategory}</h2>

            {isProductsLoadind && <h5>Products Is Loading...</h5>}

            <div className={classes.cardContainer}>
            {!isProductsLoadind && products.map((product) => (
                    <a key={product.id} href="#">
                        <div className={classes.card}>
                            <div className={classes.img}>
                                <img src={product.image} alt="" width="120px" />
                            </div>
                            <div className={classes.caption}>
                                <h5 className={classes.title}>{product.title}</h5>
                                <p>{product.category}</p>
                                <p className={classes.price1}>{product.price}$</p>
                                <p>Rate: {product.rating.rate}</p>
                            </div>
                        </div>
                    </a>
            ))}
            </div>
        </>
    )
}
export default ProductCard;