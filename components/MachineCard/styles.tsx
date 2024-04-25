import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { mapInfo } from "../../utils/definition";
import type { IContainerPlatform } from "./types";

export const Container = styled.header`
  font-size: 1rem;
  border-bottom: 1px #808080 solid;
  border-top: 1px transparent solid;
  border-right: 1px transparent solid;
  border-left: 1px transparent solid;
`;

export const CardLabel = styled.div<IContainerPlatform>`
  display: grid;
  justify-content: space-between;

  grid-template-columns: ${({ platform }) =>
		platform === mapInfo.swigger ? "70% 30%" : "33% 33% 33%"};

  @media ${device.laptop} {
    grid-template-columns: ${({ platform }) =>
			platform === mapInfo.swigger
				? "30% 25% 15% 15% 5%"
				: "20% 10% 10% 10% 15% 15% 5%"};
  }
`;

export const ContainerExpand = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TechniquesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 48%);
  justify-content: space-between;

  & > ul {
    display: flex;
    flex-direction: column;
    margin: 0rem 1rem;
    padding: 0rem 1rem;
  }

  & > li {
    margin: 0rem;
    padding: 0rem;
  }
`;

export const CertificationsContainer = styled.div`
  border-left: 5px solid red;
  margin: 1rem 0rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
  background-color: var(--colorGrayLight);
  border-radius: 4px;
`;

export const TextWithIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
`;
