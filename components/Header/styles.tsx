import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const Container = styled.main`
  padding: 1.5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > h1 {
    text-shadow: 0px 0px 10px #000000;
    color: var(--colorRedLight);
    text-align: center;
  }

  & > h2,
  & > h1 {
    padding: 0rem;
    margin: 0rem;
  }

  @media ${device.tablet} {
    padding: 2rem 0rem;
  }
`;

export const PlatformContainer = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 50% 50%;

  & > p {
    text-align: center;
    margin: 0.25rem 0rem;
    padding: 0rem;
  }

  & > :nth-child(3) {
    grid-column: 1 / 3;
  }

  @media ${device.tablet} {
    width: 100%;
    grid-template-columns: repeat(3, auto);
    & > :nth-child(3) {
      grid-column: auto;
    }
  }
`;
