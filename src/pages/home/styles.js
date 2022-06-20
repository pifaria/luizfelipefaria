import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
`

export const Content = styled.div`
    main{
        display: flex;
        justify-content: center;
        height: 90vh;
        
        section{
            width: 80%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
    
            h1{
                font-size: 3rem;
                color: var(--pink);
            }
            
            p{
                color: var(--blue);
                font-size: 0.9rem;
            }
        }

        button{
            width: 50%;
            padding: 5% 0;
            margin-top: 16px;
            font-weight: 700;
        }
    }

    @media (min-width: 700px){
        display: flex;
        flex-direction: row;
        width: 100%;
    }

`