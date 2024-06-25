import { color } from './../../GlobalStyles';
import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: white ;
    padding: 18px;
    width: auto;
    max-height: 400px;
    border: 1px solid #b5b5b5;
    border-radius: 5px;

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
        object-fit: cover;
        min-height: 230px;
        max-width: 230px;
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

        &:hover {
            outline: 2px solid ${color.primary};
            color: ${color.primary};
            background-color: transparent;
        }
    }
`