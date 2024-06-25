import { useEffect, useState } from "react"
import { Banner } from "../../components/Banner/Banner"
import { Header } from "../../components/Header/Header"
import { MainLayout } from "../../layout/MainLayout"
import { ProductosContainer } from "./style"
import { Product } from "../../interfaces/products"
import { Card } from "../../components/Card/Card"
import { LastProductsGrid } from "../../components/LastProducts/style"

export const ProductosPage = () => {
  const [listProducts, setListProducts] = useState([])

  const callProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/products/api/get_all_products/', {
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
    callProducts();
  }, [])
  
  return (
    <>
    <Header/>
    <MainLayout>
      <ProductosContainer>
        <Banner title="Productos"/>
        <LastProductsGrid>
          {listProducts?.map((product: Product) => (
            <Card key={product.id} id={product.id} brand={product.brand} name={product.name} price={product.price} imgUrl={product.imageUrl}/>
          ))}
        </LastProductsGrid>
      </ProductosContainer>
    </MainLayout>
    </>
  )
}
