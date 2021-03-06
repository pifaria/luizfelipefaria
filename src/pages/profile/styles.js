import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;    
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    main{
        width: 80%;
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        h1{
            color: var(--blue);
        }

        article{
            font-size: 0.7rem;
            margin-top: 8px;
        }
    }

    @media (min-width: 700px){
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 100%;

        main{
            width: 65%;

            article{
                font-size: 1rem;
            }
        }
    }
`