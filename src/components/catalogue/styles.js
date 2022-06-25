import styled from 'styled-components'

export const Container = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: scroll;

    ::-webkit-scrollbar {
     height: 5px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;

    :hover > a{
        display: block;
    }

    img{
        min-width: 200px;
        margin-right: 10px;
        cursor: pointer;

        :hover{
            box-shadow: 0 0 1em var(--blue);
        }
    }

    a{
        display: none;
    }

    @media (min-width: 700px){
        width: 33%;
        padding: 15px;
        margin-bottom: 36px;
    }

`