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
    text-align: center;
  }

  & > h2,
  & > h1 {
    padding: 0rem;
    margin: 0rem;
  }
`

export const PlatformContainer = styled.div`
  display: flex;
  gap: 3rem;

  & > p {
    margin: 0rem;
    padding: 0rem;
  }
`
