import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: var(--dark-purple);
    overflow-y: scroll;
    
    @media (min-width: 700px){
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.7);
    }
`

export const Box = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;


    svg{
        align-self: flex-start;
        color: var(--blue);
        cursor: pointer;
        margin-left: 5%;


        :hover{
            background-color: var(--blue);
            color: var(--dark-purple);
            border-radius: 100%;
        }
    }

    @media (min-width: 700px){
        height: 80vh;
        width: 70vw;
        background-color: var(--dark-purple);
        box-shadow: 0 0 1em var(--blue);
        padding-top: 10px;
    }

`

export const Content = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1{
        color: var(--blue);
        font-size: 2rem;
    }

    div{
        img{
            width: 100%;
        }
    }

    a{
        display: flex;
        align-items: center;
        
        p{
            display: none;
            color: var(--blue);
            font-size: 0.9rem;
            margin-left: 8px;
        }
        
        svg{
            align-self: flex-start;
            margin: 16px 0 16px 5%;
            color: var(--blue);
            cursor: pointer;
        }
        
        :hover > p{
            display: block;
        }
    }

    @media (min-width: 700px){
        div{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            img{
                width: 48%;
            }

            article{
                font-size: 1.3rem;
                width: 48%;
            }
        }
    }
`