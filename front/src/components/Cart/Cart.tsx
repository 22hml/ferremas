import { IconMinus, IconPaywall, IconPlus, IconX } from "@tabler/icons-react"
import { CartMenu } from "./style"
import { useCartStore } from "../../store/useCartStore"

interface PropTypes {
  handleCart: () => void;
}

export const Cart = ({ handleCart }: PropTypes) => {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const incrementQuantity = useCartStore((state) => state.incrementQuantity)
  const decrementQuantity = useCartStore((state) => state.decrementQuantity)

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartMenu>
      <div className="topSection">
        <h3>Tu carrito</h3>
        <button className="closeCart" onClick={handleCart}><IconX size={24} stroke={2}/></button>
      </div>
      <div className="itemList">
        <ul>
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
        <button>Pagar <IconPaywall/></button>
      </section>
    </CartMenu>
  )
}
