import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { ICountFilterOptions } from "./types";

export const Container = styled.section`
  width: 100%;
`;

export const FilterContainer = styled.form`
  display: grid;
  grid-template-columns: 100%;
  background-color: var(--colorGrayDark);
  border-radius: 0.5rem;

  @media ${device.laptop} {
    grid-template-columns: 5% 5% 70% 20%;
  }
`;

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.75rem 0.25rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;

  ::placeholder {
    color: gray;
  }

  :-ms-input-placeholder {
    color: gray;
  }

  ::-ms-input-placeholder {
    color: gray;
  }

  @media ${device.laptop} {
    padding: 0rem 0rem 0rem 0.5rem;
  }
`;

export const ButtonSearch = styled.button`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: var(--colorRedDark);
  color: white;
  border: none;
  outline: none;
  font-size: 1.1rem;
  padding: 0.5rem 0rem;
  cursor: pointer;
`;

const BaseDivFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// TODO: Improve css implementation
export const ContainerSearch = styled(BaseDivFlex)<ICountFilterOptions>`
  ${({ $options }) =>
		$options === 0
			? ""
			: `position: relative;
  &::after {
    padding: 0px;
    top: 5px;
    right: 0%;
    position: absolute;
    color: gold;
    content: "${$options}";
    text-align: center;
    font-size: 15px;

    @media ${device.tablet} {
      top: 15px;
      right: 15%;
    }

    @media ${device.laptop} {
      top: 15px;
      right: 5%;
    }

  }`};
`;

export const ContainerFilter = styled(BaseDivFlex)`
  background-color: var(--colorRedDark);
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  cursor: pointer;
`;

export const ContainerMobileIcon = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const ContainerMobileSearch = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
`;
