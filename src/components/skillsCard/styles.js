import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    border: 1px solid var(--purple);
    padding: 10%;
    height: 300px;
    margin-top: 16px;
`

export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h2{
        font-size: 2rem;
        color: var(--blue);
    }

    h3{
        font-size: 0.9rem;
        color: var(--pink);
    }
    
    p, li{
        color: var(--purple);
    }
`