import styled from "styled-components"

export const Container = styled.div`
  border-radius: 0.5rem;
  margin: 1rem 0rem 0rem 0rem;
  padding: 1rem 1rem;
  background-color: var(--colorGrayDark);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const GridOptions = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: row;
  justify-content: flex-start;
`

export const OptionFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-ed;

  & p {
    text-transform: capitalize;
  }

  & img,
  & svg {
    cursor: pointer;
  }
`

export const ApplyChange = styled.button`
  width: 100px;
  border-radius: 0.5rem;
  color: white;
  border: none;
  outline: none;
  font-size: 1.1rem;
  padding: 0.5rem 0rem;
  background-color: var(--colorRedDark);
  cursor: pointer;
`
