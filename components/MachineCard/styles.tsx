import styled from "styled-components"

export const Container = styled.header`
  font-size: 1rem;
  border-bottom: 1px white solid;
`

export const CardLabel = styled.div`
  display: grid;
  grid-template-columns: 20% 10% 10% 10% 15% 15% 5%;
  justify-content: space-between;
`

export const ContainerExpand = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TechniquesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 48%);
  justify-content: space-between;

  & > li {
    margin: 0rem;
    padding: 0rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
  }
`

export const CertificationsContainer = styled.div`
  border-left: 5px solid red;
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  margin: 1rem 0rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
  background-color: var(--colorGrayLight);
  border-radius: 4px;
`

export const TextWithIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
`
