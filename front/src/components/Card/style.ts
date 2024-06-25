import { color } from './../../GlobalStyles';
import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: white;
    padding: 18px;
    width: 230px; /* Fija el ancho de la tarjeta */
    height: 400px; /* Fija la altura de la tarjeta */
    border: 1px solid #b5b5b5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        outline: 1px solid grey;
    }

    .mainTitle {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-weight: 700;
        margin-bottom: 8px;

        h4 {
            color: ${color.secondary};
        }
    }

    img {
        object-fit: contain;
        height: 230px; /* Fija la altura de la imagen */
        width: 100%;
        border-radius: 18px;
    }

    .price {
        margin-top: 12px;

        p {
            color: ${color.primary};
            font-weight: 700;
            font-size: 18px;
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 6px;
        color: ${color.text};
        font-weight: 700;
        margin-top: 16px;
        border: none;
        cursor: pointer;
        background-color: ${color.primary};
        border-radius: 12px;
        padding: 12px 16px;
        transition: all 0.3s ease-in-out;
        color: white;
        width: 75%;

        &:hover {
            outline: 2px solid ${color.primary};
            color: ${color.primary};
            background-color: transparent;
        }
    }
`
