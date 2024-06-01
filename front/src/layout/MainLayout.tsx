import { PropsWithChildren } from "react";
import { MainLayoutContainer } from "./style";

export const MainLayout = ({children} : PropsWithChildren) => {
  return (
    <MainLayoutContainer>{children}</MainLayoutContainer>
  )
}
