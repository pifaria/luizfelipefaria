import styled from 'styled-components'

export const Container = styled.section`
    width: 20%;
    display: flex;
    justify-content: center; 
    margin-right: 10%;
    @media (min-width: 700px){
        height: 100vh;
    }
`

export const Content = styled.aside`
    display: none;
    background-color: var(--dark-purple);
    width: 100%;

    header{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        box-shadow: 0 0 1em var(--blue);
        height: 20%;

        img{
            cursor: pointer;
        }

        label{
            align-self: flex-end;
            margin-right: 8%;
            color: var(--blue);
            cursor: pointer;

            
            :hover{
                background-color: var(--blue);
                padding: 0 3px;
                color: var(--dark-purple);
            }
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: center;

            h1{
                color: var(--white);
            }

            p{
                color: var(--pink);
                font-size: 0.8rem;
            }
        }

    }

    section{
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        div{
            display: flex;
            flex-direction: column;
            text-align: center;
            
            h4{
                color: var(--blue);
                padding: 8% 0;
                border-bottom: 1px solid var(--blue);
                cursor: pointer;

                :hover{
                    box-shadow: inset 0 0 4em var(--blue);
                    color: var(--white);
                }
            }
        }
    
        .icons{
            display: flex;
            flex-direction: row;
            justify-content: center;
    
            svg{
                color: var(--pink);
                cursor: pointer;

                :hover{
                    color: var(--blue);
                }
            }
        }
    }

    @media (min-width: 700px){
        display: flex;
        flex-direction: column;
    }
    
` 