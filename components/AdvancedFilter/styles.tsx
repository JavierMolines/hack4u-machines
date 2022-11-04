import styled from "styled-components"

export const Container = styled.div`
  margin: 1rem 0rem 0rem 0rem;
  width: 100%;
  background-color: gray;
  display: grid;
  grid-template-columns: repeat(4, 20%);
  justify-content: center;
`

export const OptionFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  & img,
  & svg {
    cursor: pointer;
  }
`
