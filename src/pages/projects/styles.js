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

    @media (min-width: 700px){
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 100%;

        main{
            width: 68%;
            padding: 36px;
            height: 90vh;
            overflow-y: scroll;

            ::-webkit-scrollbar {
                width: 5px;
            }

            ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px var(--purple);
                border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb {
                background: var(--blue);
                border-radius: 10px;
            }
        }
    }

`