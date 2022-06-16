import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  border: 1px solid var(--blue);
  color: var(--white);

  :hover{
    box-shadow: inset 0 0 1em var(--blue);
  }
`