import { Routes, Route} from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { ProductosPage } from '../pages/Productos/ProductosPage'
import { ContactoPage } from '../pages/Contacto/ContactoPage'
import { PagosPage } from '../pages/Pagos/PagosPage'


export const Navigation = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/Productos" element={<ProductosPage/>} />
      <Route path="/Contacto" element={<ContactoPage/>} />
      <Route path="/Pasarela" element={<PagosPage/>} />
    </Routes>
  )
}
