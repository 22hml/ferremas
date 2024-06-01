import styled from "styled-components";

export const LastProductsGrid = styled.div`
    display: grid;
    gap: 22px;
    justify-content: space-between;
    place-items: start;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    @media (max-width: 610px) {
        place-items: center;
    }
`