import { faBold } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import image from './flim.png';

const HeaderTemplateBlock = styled.div`
	width: 1440px;
	height: 40px;
	background-color: #fff;
	display: flex;
	position: relative;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	color: #000;
`;

const ButtonA = styled.button`
	background-color: #fff;
	margin-left: 40px;
	border: 0px;
	display: block;
	font-weight: 700;
`;

const BackgroundImage = styled.div`
	width: 1440px;
	height: 160px;
	text-align: center;
`;

function HeaderTemplate({ children }) {
	return (
		<>
			<HeaderTemplateBlock>
				<ButtonA>MYPAGE</ButtonA>
				<ButtonA>LOGIN</ButtonA>
				<ButtonA>JOIN</ButtonA>
			</HeaderTemplateBlock>
			<BackgroundImage style={{ backgroundImage: `url(${image})` }}>
				<p
					style={{
						color: '#ff0',
						fontSize: '42px',
						fontWeight: '700',
						margin: '0px',
						paddingTop: '30px',
						fontFamily: "'PT Serif', serif",
					}}
				>
					THE FLIM
				</p>
				<p
					style={{
						color: '#ffffff',
						fontSize: '20px',
						fontWeight: '700',
						marginTop: '14px',
						fontFamily: "'Open Sans', sans-serif",
					}}
				>
					of your lilfe
				</p>
			</BackgroundImage>
		</>
	);
}

export default HeaderTemplate;
