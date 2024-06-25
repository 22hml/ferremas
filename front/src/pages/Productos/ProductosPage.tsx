import { Header } from "../../components/Header/Header"
import { MainLayout } from "../../layout/MainLayout"
import { ProductosContainer } from "./style"

export const ProductosPage = () => {
  return (
    <>
    <Header/>
    <MainLayout>
      <ProductosContainer>
        <div className="banner">
          <h1>Productos</h1>
        </div>
      </ProductosContainer>
    </MainLayout>
    </>
  )
}
