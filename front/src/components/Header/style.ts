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

        .title {
            @media screen and (max-width: 768px) {
                padding-left: 12px;
            }
        }

        ul {
            display: flex;
            align-items: center;
            gap: 32px;

            li {
                color: black;

                .cartButton {
                    background-color: ${color.primary};
                    padding: 6px 16px;
                    cursor: pointer;
                    color: white;
                    border-radius: 8px;
                    p {
                        display: flex;
                        align-items: center;
                        gap: 6px;

                        @media screen and (max-width: 768px) {
                            white-space: nowrap;
                        }
                    }
                }

                a {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: black;
                    text-decoration: none;
                    transition: all 0.3s ease-in-out;

                    &.active {
                        color: ${color.primary};
                    }

                    &:hover {
                        color: ${color.primary};
                    }
                }

                @media screen and (max-width: 768px) {
                    display: none;

                    &.mobile {
                        display: block;
                    }
                }
            }
        }
    }
`