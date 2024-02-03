import styled from "styled-components";

export const Container = styled.main`
  font-size: 1rem;
  width: 100%;
  background-color: var(--colorGrayLight);

  position: fixed;
  bottom: 0rem;
  padding: 0.5rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  & p {
    padding: 0rem;
    margin: 0rem;
  }
`;

export const LinePerson = styled.a`
  color: var(--colorRedLight);
  padding: 0rem 0.25rem;

  :hover {
    color: var(--colorRedDark);
  }
`;

export const IconLove = styled.img`
  margin: 0rem 0.2rem;
`;
