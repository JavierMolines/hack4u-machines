import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  ::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid white;
    border-color: white transparent white transparent;
    animation: rotation 1.5s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
