import './App.css'
import Header from './componets/Header'
import ProductCard from './componets/ProductCard'
import Footer from './componets/Footer'
import { useState } from "react"

function App() {

  const [selectedCategory, setSelectedCategory] = useState("electronics")

  return (
    <>
      <Header setSelectedCategory={setSelectedCategory}/>
      <ProductCard selectedCategory={selectedCategory}/>
      <Footer/>
    </>
  )
}

export default App
