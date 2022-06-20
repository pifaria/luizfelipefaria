import styled from "styled-components";

export const Container = styled.section`
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    main{
        margin-top: 32px;
        width: 80%;
        display: flex;
        flex-direction: column;

        h1{
            color: var(--blue);
        }

        p{
            font-size: 0.7rem;
        }
    }

    @media (min-width: 700px){
        display: flex;
        flex-direction: row;
       
        main{
            width: 50%;
        }
    }
`