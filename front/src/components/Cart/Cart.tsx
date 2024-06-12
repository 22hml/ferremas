import { IconPaywall, IconX } from "@tabler/icons-react"
import { CartMenu } from "./style"

interface PropTypes {
  handleCart: () => void;
}

export const Cart = ({handleCart}: PropTypes) => {
  return (
    <CartMenu>
      <div className="topSection">
        <h3>Tu carrito</h3>
        <button className="closeCart" onClick={() => handleCart() }><IconX size={24} stroke={2}/></button>
      </div>
      <div className="itemList">
        <ul>
          <li>1x Destornillador - Makitta <button><IconX size={24} stroke={2}/></button></li>
          <li>1x Destornillador - xD <button><IconX size={24} stroke={2}/></button></li>
          <li>1x Destornillador - fufufu <button><IconX size={24} stroke={2}/></button></li>
        </ul>
      </div>
      <section className="paySection">
        <p>Total: $14.000</p>
        <button>Pagar <IconPaywall/></button>
      </section>
    </CartMenu>
  )
}
