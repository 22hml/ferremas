import styled from "styled-components";
import { color } from "../../GlobalStyles";

export const PagosStyles = styled.div`

    p {
        margin-top: 16px;
    }

    ul {

        li {
            margin: 8px 0;

            strong {
                color: ${color.primary};
            }
        }
    }

    .metodos {
        max-width: 30%;
        margin-top: 24px;
        padding: 12px;
        border-radius: 8px;
        background-color: ${color.altertext};
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 12px;

        @media screen and (max-width: 768px) {
            max-width: 100%;
        }

        label {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
                margin-top: 0;
            }

            img {
                object-fit: contain;
                max-width: 60px;
                width: 100%;
            }
        }
    }
`