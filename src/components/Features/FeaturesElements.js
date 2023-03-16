import styled from "styled-components";
import ImgBg from '../../images/featured3.jpg'
//RGG
export const FeaturesContainer = styled.div`
    min-height: 500px;
    max-height: 1000px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
    background-position: center;
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    padding: 0 1rem;

    h1{
        font-size: clamp(3rem,5vw,5rem)
    }

    p{
        margin-bottom: 1rem;
        font-size:clamp(1rem, 3vw, 2rem)
    }
`




export const FeaturesButton = styled.button`
    font-size: 1rem;
    align: center;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover{
        background: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #e31837
    }
`