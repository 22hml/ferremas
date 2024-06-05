import styled from "styled-components";
import { color } from "../../GlobalStyles";


export const TitleSectionStyled =styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;


    h3 {
        font-weight: 700;
        font-size: 28px;
        text-transform: uppercase;
        border-bottom: 3px solid ${color.primary};
    }
`