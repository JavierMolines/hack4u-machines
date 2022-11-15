import styled from "styled-components"

export const FixedContainer = styled.div`
  z-index: 10;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
`

export const ContainerContent = styled.div`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b01215df;
`
