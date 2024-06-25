import { IconShoppingCart } from "@tabler/icons-react"
import { CardContainer } from "./style"
import { useCartStore } from "../../store/useCartStore"

interface PropTypes {
  id: number;
  name: string;
  brand: string;
  price: number;
  imgUrl?: string;
}

export const Card = ({id, name, brand, price, imgUrl} : PropTypes) => {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddCart = () => {
    const newItem = { id, name, brand, price, imgUrl}
    addToCart(newItem)
  }

  return (
    <CardContainer key={id}>
      <div className="mainTitle">
        <h3>{name}</h3>
        <h4>{brand}</h4>
      </div>
      <img src={imgUrl ? imgUrl : "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"} alt={name} />
      <div className="type">
        <div></div>
      </div>
      <div className="price">
        <p>${price}</p>
      </div>
      <button onClick={handleAddCart}>
        Agregar al carrito <IconShoppingCart size={24} stroke={2}/>
      </button>
    </CardContainer>
  )
}
