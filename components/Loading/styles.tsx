import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const Spinner = styled.main`
  display: block;
  width: 300px;
  height: 300px;
  position: relative;
`;

const CircleBase = styled.div`
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  margin: auto;
  border: 3px solid;
  position: absolute;
  border-radius: 50%;
  animation-duration: 1.4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const CircleRed = styled(CircleBase)`
  width: 67px;
  height: 67px;
  border-color: var(--colorRedDark) var(--colorRedDark) transparent transparent;
  animation-name: spinnerNormal;

  @keyframes spinnerNormal {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const CircleWhite = styled(CircleBase)`
  width: 55px;
  height: 55px;
  border-color: transparent transparent white white;
  animation-name: spinnerInverse;

  @keyframes spinnerInverse {
    0% {
      transform: rotate(-0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
