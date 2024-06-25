import { Header } from "../../components/Header/Header"
import { LastProducts } from "../../components/LastProducts/LastProducts"
import { MainLayout } from "../../layout/MainLayout"
import { Swiper, SwiperSlide } from "swiper/react"
import { SwiperItem } from "./style"
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules"

import Img1 from "../../assets/Swiper1.png"
import Img2 from "../../assets/Swiper2.png"
import Img3 from "../../assets/Swiper3.png"

export const HomePage = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <SwiperItem>
              <img src={Img1} alt="" />
              <h1>Ferremás</h1>
            </SwiperItem>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem>
              <img src={Img2} alt="" />
            </SwiperItem>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem>
              <img src={Img3} alt="" />
            </SwiperItem>
          </SwiperSlide>
        </Swiper>
        <LastProducts />
      </MainLayout>
    </>
  )
}
