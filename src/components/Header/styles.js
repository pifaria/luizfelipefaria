import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    box-shadow: 0 0 1em var(--blue);
    padding: 5% 0;
    display: flex;
    justify-content: center;

    @media (min-width: 700px){
        display: none;
    }

`

export const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg{
        color: var(--blue);
        cursor: pointer;
    }
`