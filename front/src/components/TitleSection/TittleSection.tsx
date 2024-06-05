import { TitleSectionStyled } from "./style"

interface PropTypes {
    title: string
}

export const TittleSection = ({title}: PropTypes) => {
  return (
    <TitleSectionStyled>
       <h3>{title}</h3>
    </TitleSectionStyled>
  )
}
