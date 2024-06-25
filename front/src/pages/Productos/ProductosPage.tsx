import { Banner } from "../../components/Banner/Banner"
import { Header } from "../../components/Header/Header"
import { MainLayout } from "../../layout/MainLayout"
import { ProductosContainer } from "./style"

export const ProductosPage = () => {
  return (
    <>
    <Header/>
    <MainLayout>
      <ProductosContainer>
        <Banner title="Productos"/>
      </ProductosContainer>
    </MainLayout>
    </>
  )
}
