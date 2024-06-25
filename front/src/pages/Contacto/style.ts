import styled from "styled-components";
import { color } from "../../GlobalStyles";

export const ContactoContainer = styled.section`

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 1rem 0;
    }

    .sucursales {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .item {
            background-color: #f1f1f1;
            padding: 1rem;
            border-radius: 8px;
            max-width: 500px;
            width: auto;

            strong {
                font-weight: 600;
            }

            h3 {
                color: ${color.primary};
                font-size: 1.2rem;
                font-weight: 700;
                margin: 0;
            }

            p {
                margin: 0.5rem 0;
            }

            iframe {
                width: 100%;
                height: 300px;
                border: 0;
                border-radius: 8px;
            }
        }
    }
`