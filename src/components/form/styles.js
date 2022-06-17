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
        height: 56px;
    }
    
    input, textarea{
        padding: 10px 0 10px 5px;
        background-color: transparent;
        border: 1px solid var(--purple);
        margin-bottom: 4%;
        color: var(--white);
        caret-color: var(--blue);

        ::placeholder{
            color: var(--blue);
            font-size: 0.7rem;
            font-weight: 700;
        }
    }

    textarea{
        height: 100px;
    }

    button{
        align-self: flex-end;
        padding: 10px 20px;
    }
`