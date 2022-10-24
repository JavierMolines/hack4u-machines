import styled from "styled-components"

export const Container = styled.form`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--colorGrayDark);
  border-radius: 0.5rem;
`

export const Input = styled.input`
  width: 90%;
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
