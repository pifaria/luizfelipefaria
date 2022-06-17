import styled from 'styled-components'

export const Container = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: scroll;

    ::-webkit-scrollbar {
     height: 5px;
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

export const Content = styled.li`
    img{
        min-width: 200px;
        margin-right: 10px;
        padding-bottom: 16px;
    }



`