import styled from "styled-components";
import { color } from "../../GlobalStyles";

export const HeaderContainer = styled.nav`
    margin: 0 auto;
    position: sticky;
    display: flex;
    justify-content: center;
    background-color: #f7f7f7;

    section {
        width: 100%;
        min-height: 60px;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            display: flex;
            gap: 32px;

            li {
                color: black;

                .cartButton {
                    cursor: pointer;
                    p {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }

                    &.active {
                        color: ${color.primary};
                    }
                }

                a {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: black;
                    text-decoration: none;

                    &.active {
                        color: ${color.primary};
                    }
                }
            }
        }
    }
`