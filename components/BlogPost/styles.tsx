import styled from "styled-components";
import { IBlogPost } from "./types";

export const Container = styled.main<IBlogPost>`
    margin: 3rem 0rem 1rem 0rem;
	border: 1px solid #4d4d4d;

	padding: ${({ $padding }) => $padding};
	max-width: ${({ $maxWidth }) => $maxWidth};
`;

export const LineItem = styled.li`
	padding: 0.5rem 0rem;
	font-size: 1rem;
	display: list-item;
    text-align: -webkit-match-parent;
`;
