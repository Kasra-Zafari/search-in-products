import classes from "./index.module.css"
import React, { useEffect, useState } from "react"

const Header = () => {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("")

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => { setCategories(data) })
            .catch((error) => { alert("an error has been occured") })
            .finally(() => { setIsLoading(false) })
    }, [])


    const handleSelectCategory = (item) => {
        setSelectedCategory(item);
    }


    return (
        <header className={classes.header}>
            <a href="#" className={classes.logo}><img src="logo.png" alt="logo" width="100%" /></a>
            <nav className={classes.nav}>
                {isLoading && <p>Category Is Loading...</p>}

                {categories.map((category) => (
                    <button key={category} onClick={() => handleSelectCategory(category)}>{category}</button>
                ))}
            </nav>
            <div>
                <button>Login</button>
            </div>
        </header>
    )
}

export default Header