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

    @media (min-width: 700px){
        flex-wrap: wrap;
        overflow-x: auto;
        overflow-y: scroll;
        height: 40vh;
        padding: 10px;

        ::-webkit-scrollbar {
            width: 5px;
        }
    }
`

export const Content = styled.li`
    img{
        min-width: 200px;
        margin-right: 10px;
        padding-bottom: 16px;

        :hover{
            box-shadow: 0 0 1em var(--blue);
        }
    }

    @media (min-width: 700px){
        width: 33%;
    }

`