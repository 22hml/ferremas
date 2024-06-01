import { BrowserRouter } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { GlobalStyles } from "./GlobalStyles"


export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Navigation/>
    </BrowserRouter>
  )
}
