import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    :root{
        --white: #fff;
        --pink: #F72585;
        --purple: #7209B7;
        --dark-purple: #090414;
        --blue: #61dafb;
    }

    body{
        font-family: 'Inter', sans-serif;
        background-color: var(--dark-purple);
        color: var(--white);
    }

    span{
        font-family: 'Indie Flower', cursive;
        color: var(--purple);
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 700;
    }

    img{
        width: 15%;
    }

    li{
        list-style: none;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: var(--blue);

        :hover{
            color: var(--purple);
            font-size: 1.1rem;
        }
    }

    ::-webkit-scrollbar {
     height: 5px;
     width: 5px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px var(--purple);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--blue);
        border-radius: 10px;
    }
`