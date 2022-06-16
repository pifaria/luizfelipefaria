import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;

`

export const Content = styled.section`
    height: 100vh;

    header{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        box-shadow: 0 0 1em var(--pink);
        height: 25%;

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

        p{
            color: var(--pink);
            font-size: 0.8rem;
        }

        img{
            align-self: center;
        }
    }

    main{
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

                :hover{
                    color: var(--blue);
                }
            }
        }
    }
    
` 