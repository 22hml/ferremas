import styled from "styled-components";
import BannerProductos from '../../assets/ProductosBanner.png'

export const BannerContainer = styled.div`
        border-radius: 8px;
        background-image: url(${BannerProductos});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: #fff;
        height: 130px;
        margin-bottom: 20px;

        h1 {
            font-weight: 700;
            text-transform: uppercase;
            font-size: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
`