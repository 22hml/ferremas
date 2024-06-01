import { IconBuildingStore, IconHome, IconPhone, IconShoppingCart } from "@tabler/icons-react"
import { HeaderContainer } from "./style"
import { NavLink } from 'react-router-dom'
import { useState } from "react"
import { Cart } from "../Cart/Cart"

export const Header = () => {
  const [showCart, setShowCart] = useState(localStorage.getItem('ShowCart') ?  localStorage.getItem('ShowCart') : false);

  const handleCart = () => {
    localStorage.setItem('ShowCart', 'true')
    setShowCart(!showCart);
  }
  return (
    <>
    <HeaderContainer>
        <section>
            <div>
                logo
            </div>
            <ul>
                <li>
                  <NavLink to={'/'}>
                    Inicio <IconHome size={24} stroke={2}/>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/Productos'}>
                    Productos <IconBuildingStore size={24} stroke={2}/>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/Contacto'}>
                    Contacto <IconPhone size={24} stroke={2}/>
                  </NavLink>
                </li>
                <li>
                  <div className="cartButton" onClick={() => handleCart()}>
                    <p>
                      Mi Carrito <IconShoppingCart size={24} stroke={2}/>
                    </p>
                  </div>
                </li>
            </ul>
        </section>
    </HeaderContainer>
    {showCart && <Cart/>}
    </>
  )
}
