import { Card } from "../Card/Card"
import { TittleSection } from "../TitleSection/TittleSection"
import { LastProductsGrid } from "./style"

export const LastProducts = () => {
  return (
    <>
    <TittleSection title="Nuevos productos"/>
    <LastProductsGrid>
      <Card id={1} name="Destornillador" brand="Makitta" price={14000} imgUrl="https://dojiw2m9tvv09.cloudfront.net/4287/product/destornillador-bahco-0071387.jpg"/>
      <Card id={2} name="Taladro" brand="Makitta" price={12000}/>
      <Card id={3} name="Destornillador" brand="Makitta" price={4000}/>
      <Card id={4} name="Destornillador" brand="Makitta" price={100}/>
      <Card id={5} name="Destornillador" brand="Makitta" price={14000}/>
      <Card id={6} name="Destornillador" brand="Makitta" price={14000} imgUrl="https://dojiw2m9tvv09.cloudfront.net/4287/product/destornillador-bahco-0071387.jpg"/>
      <Card id={7} name="Taladro" brand="Makitta" price={14000}/>
      <Card id={8} name="Destornillador" brand="Makitta" price={14000}/>
      <Card id={9} name="Destornillador" brand="Makitta" price={14000}/>
      <Card id={10} name="Destornillador" brand="Makitta" price={14000}/>
    </LastProductsGrid>
    </>
  )
}

