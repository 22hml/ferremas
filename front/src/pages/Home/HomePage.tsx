import { Header } from "../../components/Header/Header"
import { LastProducts } from "../../components/LastProducts/LastProducts"
import { MainLayout } from "../../layout/MainLayout"


export const HomePage = () => {
  return (
    <>
      <Header/>
      <MainLayout>
        <section>
          <LastProducts/>
        </section>
      </MainLayout>
    </>
  )
}
