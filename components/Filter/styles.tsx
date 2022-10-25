import styled from "styled-components"

export const Container = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 5% 75% 20%;
  background-color: var(--colorGrayDark);
  border-radius: 0.5rem;
`

export const Input = styled.input`
  font-size: 1.2rem;
  padding-left: 0.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;

  ::placeholder {
    color: white;
  }
`

export const ButtonSearch = styled.button`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: var(--colorRedDark);
  border: none;
  outline: none;
  font-size: 1.1rem;
  padding: 0.5rem 0rem;
`

export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
