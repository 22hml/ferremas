import { useEffect, useState } from "react"
import { Header } from "../../components/Header/Header"
import { MainLayout } from "../../layout/MainLayout"
import { useCartStore } from "../../store/useCartStore"
import { PagosStyles } from "./style"
import { IconCashRegister } from "@tabler/icons-react"
import { Loader } from "../../components/Loader/Loader"
import { Modal } from "../../components/Modal/Modal"

export const PagosPage = () => {
    const [loaderStatus, setLoaderStatus] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const cart = useCartStore((state) => state.cart)
    const cleanCart = useCartStore((state) => state.cleanCart)

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    useEffect(() => {
    }, [])

    return (
        <>
            <Header />
            <MainLayout>
                <h2><strong>Tu Carrito</strong></h2>
                <PagosStyles>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.quantity}x <strong>{item.name} - {item.brand}</strong> - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total:</strong> ${calculateTotal()}</p>
                    <section className="metodos">
                        <label>
                            <img src="https://logospng.org/download/mercado-pago/logo-mercado-pago-icone-1024.png" alt="" />
                            <p>Mercado Pago</p>
                            <input type="radio" name="pagos" value="MercadoPago"/>
                        </label>
                        <label>
                            <img src="https://khipu.zendesk.com/hc/theming_assets/01HZPD37CCHRKWWGKSGS6Z3TBE" alt="" />
                            <p>Transferencias</p>
                            <input type="radio" name="pagos" value="Khipu"/>
                        </label>
                        <button onClick={() => {
                            setLoaderStatus(true)
                            setTimeout(() => {
                                setShowModal(true)
                                setTimeout(() => {
                                    setLoaderStatus(false)
                                    setShowModal(false)
                                    cleanCart()
                                    localStorage.setItem('isExpanded', 'false')
                                    location.href = '/'
                                }, 1000)
                            }, 2000)
                        }} className="primaryButton">Continuar <IconCashRegister width={24} stroke={2}/></button>
                    </section>
                </PagosStyles>
            </MainLayout>
            {loaderStatus && <Loader text="Procesando Pago"/>}
            {showModal && <Modal />}
        </>
    )
}
