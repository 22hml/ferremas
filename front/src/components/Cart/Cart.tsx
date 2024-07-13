import { IconMinus, IconPaywall, IconPlus, IconX } from "@tabler/icons-react"
import { CartMenu } from "./style"
import { useCartStore } from "../../store/useCartStore"
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader/Loader";

interface PropTypes {
  handleCart: () => void;
}

export const Cart = ({ handleCart }: PropTypes) => {
  const [loaderStatus, setLoaderStatus] = useState(false)
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const incrementQuantity = useCartStore((state) => state.incrementQuantity)
  const decrementQuantity = useCartStore((state) => state.decrementQuantity)

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const cartRef = useRef(null);

  useEffect(() => {
    if (cartRef.current) {
      autoAnimate(cartRef.current);
    }
  }, [cartRef]);


  return (
    <>
    <CartMenu>
      <div className="topSection">
        <h3>Tu carrito</h3>
        <button className="closeCart" onClick={handleCart}><IconX size={24} stroke={2}/></button>
      </div>
      <div className="itemList">
        <ul ref={cartRef}>
          {cart.map(item => (
            <li key={item.id}>
              {item.quantity}x {item.name} - {item.brand} 
              <button onClick={() => decrementQuantity(item.id)}><IconMinus size={24} stroke={2}/></button>
              <button onClick={() => incrementQuantity(item.id)}><IconPlus size={24} stroke={2}/></button>
              <button onClick={() => removeFromCart(item.id)}><IconX size={24} stroke={2}/></button>
            </li>
          ))}
        </ul>
      </div>
      <section className="paySection">
        <p>Total: ${calculateTotal()}</p>
        <button onClick={() => {
          setLoaderStatus(true)
          setTimeout(() => {
            setLoaderStatus(false)
            navigate('/Pasarela')
          }, 2000)
        }}>Pagar <IconPaywall/></button>
      </section>
    </CartMenu>
    {loaderStatus && <Loader text="Cargando"/>}
    </>
  )
}
