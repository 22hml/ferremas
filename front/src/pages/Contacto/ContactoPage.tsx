import { Banner } from "../../components/Banner/Banner"
import { Header } from "../../components/Header/Header"
import { MainLayout } from "../../layout/MainLayout"
import { ContactoContainer } from "./style"


export const ContactoPage = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <ContactoContainer>
          <Banner title="Contacto" />
          <div>
            <h2>
              Nuestras Sucursales
            </h2>
            <section className="sucursales">
              <div className="item">
                <h3>Av. Vicuña Mackenna 1471, Ñuñoa</h3>
                <p>Horario de atención: <strong>10:00 a 20:00 hrs</strong></p>
                <p>Teléfono: <strong>222 222 222</strong></p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5597.654443376094!2d-70.63095064044633!3d-33.4653194621461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c58d59a80b61%3A0xcfcc3867263793f0!2sFerreteria%20tecnica!5e0!3m2!1sen!2scl!4v1719282369245!5m2!1sen!2scl" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="item">
                <h3>Lira 1818,Santiago</h3>
                <p>Horario de atención: <strong>10:00 a 20:00 hrs</strong></p>
                <p>Teléfono: <strong>222 222 222</strong></p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6656.5326185394215!2d-70.64117429372668!3d-33.468416699999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c55cc957582b%3A0x1110ba8101d7ed45!2sFerreter%C3%ADa%20Bogot%C3%A1%20Chile!5e0!3m2!1sen!2scl!4v1719282522833!5m2!1sen!2scl" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </section>
          </div>
        </ContactoContainer>
      </MainLayout>
    </>
  )
}
