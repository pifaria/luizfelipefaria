import styled from "styled-components";

export const Container = styled.section`
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    main{
        width: 80%;
        margin-top: 32px;
        
        h1{
            color: var(--blue);
        }

        h3{
            color: var(--pink);
        }
    }

`