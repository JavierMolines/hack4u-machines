import styled from "styled-components"

export const Container = styled.main`
  padding: 2.5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > h1 {
    color: var(--colorRedLight);
  }

  & > h2,
  & > h1 {
    padding: 0rem;
    margin: 0rem;
  }
`
