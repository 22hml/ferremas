import { useEffect, useState } from "react"
import { Card } from "../Card/Card"
import { TittleSection } from "../TitleSection/TittleSection"
import { LastProductsGrid } from "./style"
import { Product } from "../../interfaces/products"

export const LastProducts = () => {

  const [listProducts, setListProducts] = useState([])

  const callLastProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/products/api/get_last_products/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        } 
      })
      const data = await response.json()
      setListProducts(data.products)
      console.log(data.products)
    }
    catch (error) {
      setListProducts([])
      console.log(error)
    }
  }

  useEffect(() => {
    // callLastProducts();
  }, [])

  return (
    <>
    <TittleSection title="Nuevos productos"/>
    <LastProductsGrid>
          {listProducts?.map((product: Product) => (
            <Card key={product.id} id={product.id} brand={product.brand} name={product.name} price={product.price} imgUrl={product.imageUrl}/>
          ))}
    </LastProductsGrid>
    </>
  )
}

