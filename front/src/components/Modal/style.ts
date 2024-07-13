import styled from "styled-components";

export const ModalStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 12px;

        p {
            font-size: 24px;
        }

        img {
            width: 50px;
            height: 50px;
        }
    }
`