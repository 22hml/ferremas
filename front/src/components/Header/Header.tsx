import { IconBuildingStore, IconHome, IconPhone, IconShoppingCart, IconShoppingCartPlus } from "@tabler/icons-react"
import { HeaderContainer } from "./style"
import { NavLink } from 'react-router-dom'
import { useState } from "react"
import { Cart } from "../Cart/Cart"

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(localStorage.getItem('isExpanded') === 'true' ? true : false)

  const toggleMenu = () => {
    localStorage.setItem('isExpanded', (!isExpanded).toString());
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <HeaderContainer>
        <section>
          <div>
            <strong>FERRETERIA FERREMAS</strong>
          </div>
          <ul>
            <li>
              <NavLink to={'/'}>
                Inicio <IconHome size={24} stroke={2} />
              </NavLink>
            </li>
            <li>
              <NavLink to={'/Productos'}>
                Productos <IconBuildingStore size={24} stroke={2} />
              </NavLink>
            </li>
            <li>
              <NavLink to={'/Contacto'}>
                Contacto <IconPhone size={24} stroke={2} />
              </NavLink>
            </li>
            <li>
              <div className={isExpanded ? "cartButton active" : "cartButton"} onClick={() => toggleMenu()}>
                <p>
                  Mi Carrito
                  {isExpanded ? <IconShoppingCartPlus size={24} stroke={2} /> : <IconShoppingCart size={24} stroke={2} />}
                </p>
              </div>
            </li>
          </ul>
        </section>
      </HeaderContainer>
      <div>
        {isExpanded && <Cart handleCart={toggleMenu} />}
      </div>
    </>
  )
}
