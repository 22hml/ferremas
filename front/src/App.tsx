import { BrowserRouter } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { GlobalStyles } from "./GlobalStyles"
import 'swiper/css';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Navigation/>
    </BrowserRouter>
  )
}
