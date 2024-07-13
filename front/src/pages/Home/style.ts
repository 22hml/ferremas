import styled from "styled-components";

export const SwiperItem = styled.div`
    width: 100%;
    max-height: 400px;
    border-radius: 8px;
    position: relative;
    
    h1 {
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    img {
        object-position: top;
        width: 100%;
        border-radius: 8px;
    }
`