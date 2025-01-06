import './App.css'
import Header from './componets/Header'
import ProductCard from './componets/ProductCard'
import { useState } from "react"

function App() {

  const [selectedCategory, setSelectedCategory] = useState("")

  return (
    <>
      <Header setSelectedCategory={setSelectedCategory}/>
      <ProductCard selectedCategory={selectedCategory}/>
    </>
  )
}

export default App
