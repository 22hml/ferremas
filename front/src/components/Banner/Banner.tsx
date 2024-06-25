import { BannerContainer } from "./style";

interface BannerProps {
    title: string;
}

export const Banner = ({title}: BannerProps) => {
  return (
    <BannerContainer>
        <h1>{title}</h1>
    </BannerContainer>
  )
}
