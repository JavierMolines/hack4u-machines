import styled from "styled-components"

export const Container = styled.main`
  position: fixed;
  bottom: 0rem;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & p {
    padding: 0rem;
    margin: 0rem;
  }
`

export const LinePerson = styled.a`
  color: var(--colorRedLight);
  padding: 0rem 0.25rem;

  :hover {
    color: var(--colorRedDark);
  }
`
