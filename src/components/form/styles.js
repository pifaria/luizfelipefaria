import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    
    div{
        display: flex;
        justify-content: space-between;

        input{
            width: 48%;
        }
    }

    input{
    }
    
    input, textarea{
        padding: 10px 0 10px 5px;
        height: 40px;
        background-color: transparent;
        border: 1px solid var(--purple);
        margin-bottom: 4%;

        ::placeholder{
            color: var(--blue);
        }
    }

    button{
        align-self: flex-end;
        padding: 10px;
    }
`