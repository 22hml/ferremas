import { Card } from "../Card/Card"
import { TittleSection } from "../TitleSection/TittleSection"
import { LastProductsGrid } from "./style"

export const LastProducts = () => {
  return (
    <>
    <TittleSection title="Nuevos productos"/>
    <LastProductsGrid>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </LastProductsGrid>
    </>
  )
}

