import styled from 'styled-components'

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
`

export const Content = styled.li`
    display: flex;
    flex-direction: column;
    margin-top: 45px;

    h2{
        color: var(--blue);
    }

    img{
        width: 100%;
        box-shadow: 0 0 1em var(--blue);
        border-radius: 8px;
        margin: 16px 0;

    }
    
    article{
        font-size: 0.8rem;
        display: none;
    }
    
    :hover > article{
        display: block;
    }
`