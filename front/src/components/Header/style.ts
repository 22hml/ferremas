import styled from "styled-components";
import { color } from "../../GlobalStyles";

export const HeaderContainer = styled.nav`
    margin: 0 auto;
    position: sticky;
    display: flex;
    justify-content: center;
    background-color: ${color.text};

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
                color: ${color.background};

                .cartButton {
                    cursor: pointer;
                    p {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }
                }

                a {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: ${color.background};
                    text-decoration: none;

                    &.active {
                        color: ${color.primary};
                    }
                }
            }
        }
    }
`