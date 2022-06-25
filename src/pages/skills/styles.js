import styled from 'styled-components'

export const Container = styled.section`
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    main{
        width: 80%;
        margin-top: 32px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        
        h1{
            color: var(--pink);
        }

        p{
            font-size: 0.7rem;
            margin-top: 8px;
        }
    }

    @media (min-width: 700px){
        display: flex;
        flex-direction: row;
        width: 100%;

        main{
            width: 50%;

            div{
                display: flex;
                
            }

            p{
                font-size: 1rem;
            }
        }
    }

`
