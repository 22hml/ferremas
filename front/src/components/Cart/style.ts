import { color } from './../../GlobalStyles';
import styled from "styled-components";

export const CartMenu = styled.aside`
    padding: 24px;
    position: fixed;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: ${color.primary};
    color: white;
    box-shadow: -5px 0px 24px -12px rgba(0,0,0,0.75);

    h3 {
        font-size: 18px;
        font-weight: 600;
    }


    .topSection {
        display: flex;
        align-items: center;

        button {
            background-color: transparent;
            border: none;

            svg {
                color: white;
            }
        }
    }

    .itemList {
        ul {
            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid ${color.altertext};
                margin: 12px 0;

                button {
                    cursor: pointer;
                    background-color: transparent;
                    border: none;
                    color: white;
                }
            }
        }
    }

    .paySection {
        margin-top: 32px;
        p {
            font-size: 22px;
            font-weight: 700;
        }

        button {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 600;
            margin-top: 18px;
            cursor: pointer;
            border: none;
            padding: 8px 22px;
            background-color: white;
            color: ${color.primary};
            border-radius: 18px;
            transition: all 0.3s ease-in-out;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
`