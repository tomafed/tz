import React from 'react';
import st from 'styled-components';
import {
	Link,
	useLocation,
} from 'react-router-dom';

const SelectorContent = () => {
	const { pathname } = useLocation();
	return(
		<Content>
			<Button to="/" active={pathname === '/' ? 1 : 0}>
				Info
			</Button>
			<Button to="/albums" active={pathname === '/albums' ? 1 : 0}>
				Albums
			</Button>
		</Content>
	)
}

const Content = st.div``;

const Button = st(Link)`
	padding: 5px 10px;
	text-decoration: none;
	box-sizing: border-box;
	display: inline-flex;
	border-radius: 10px;
	margin: 0 15px 0 15px;
	cursor: pointer;
	transition: 0.1s all;
	color: ${({theme}) => theme.color.dark.main};

	&:hover {
		background: ${({theme}) => theme.color.primary.main};
		color: ${({theme}) => theme.color.white};
	}

	${({ active, theme }) => active && `
		background: ${theme.color.primary.main};
		color: ${theme.color.white};
	`}
`;

export default SelectorContent;