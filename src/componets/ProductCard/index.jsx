import { useState } from "react";
import classes from "./index.module.css"
import { useEffect } from "react";

const ProductCard = (props) => {

    const [products, setProducts] = useState([]);
    const [isProductsLoadind, setIsProductsLoading] = useState(false);
    const [searchBox, setSearchBox] = useState("");


    useEffect(() => {
        if (props.selectedCategory) {
            setIsProductsLoading(true)
            fetch(`https://fakestoreapi.com/products/category/${props.selectedCategory}`)
                .then((res) => res.json())
                .then((data) => { setProducts(data) })
                .catch((error) => { alert("an error has been ocuured") })
                .finally(() => { setIsProductsLoading(false) })
        }
    }, [props.selectedCategory]);

    const handleSearch = (event) => {
        setSearchBox(event.target.value);
    }


    const filteredProducts = products.filter((product) => // **خط 28-30: فیلتر محصولات**
        product.title.toLowerCase().includes(searchBox.toLowerCase())
    );


    return (
        <>
            <div className={classes.search}>
                <input
                    type="text"
                    placeholder="Search by product name..."
                    value={searchBox}
                    onChange={handleSearch} />
            </div>

            <h2>{props.selectedCategory}</h2>

            {isProductsLoadind && <h5>Products Is Loading...</h5>}

            <div className={classes.cardContainer}>
                {!isProductsLoadind && filteredProducts.map((product) => (
                    <a key={product.id} href="#">
                        <div className={classes.card}>
                            <div className={classes.img}>
                                <img src={product.image} alt="product.image" width="120px" />
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