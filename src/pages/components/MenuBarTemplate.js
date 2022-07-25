import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
	width: 1440px;
	height: 80px;
	background-color: #000;
	display: flex;
	position: relative;
`;

const Blank = styled.div`
	width: 510px;
	height: 80px;
`;
const ButtonB = styled.button`
	background-color: #000;
	margin-right: 40px;
	border: 0px;
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	color: #fff;
	display: inline-block;
`;

function MenuBarTemplate({ children }) {
	return (
		<>
			<Menu>
				<Blank></Blank>
				<ButtonB>HOME</ButtonB>
				<ButtonB>FILM</ButtonB>
				<ButtonB>STUDIO</ButtonB>
				<ButtonB>MARK</ButtonB>
			</Menu>
		</>
	);
}

export default MenuBarTemplate;
