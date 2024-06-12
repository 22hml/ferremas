import { IconShoppingCart } from "@tabler/icons-react"
import { CardContainer } from "./style"
import { useCartStore } from "../../store/useCartStore"

export const Card = () => {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddCart = () => {
    const newItem = { id: 1, name: 'Destornillador', brand: 'Makitta', price: 14000 }
    addToCart(newItem)
  }

  return (
    <CardContainer>
      <div className="mainTitle">
        <h3>Destornillador Punta dasjkdla</h3>
        <h4>Makitta</h4>
      </div>
      <img src="https://dojiw2m9tvv09.cloudfront.net/4287/product/destornillador-bahco-0071387.jpg" alt="" />
      <div className="type">
        <div></div>
      </div>
      <div className="price">
        <p>$14.000</p>
      </div>
      <button onClick={handleAddCart}>
        Agregar al carrito <IconShoppingCart size={24} stroke={2}/>
      </button>
    </CardContainer>
  )
}
