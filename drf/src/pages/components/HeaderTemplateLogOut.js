import React from 'react';
import styled from 'styled-components';
import image from './film.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';

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


const BackgroundImage = styled.div`
	width: 1440px;
	height: 160px;
	text-align: center;
`;

function HeaderTemplateLogOut({ children }) {
	const navigate = useNavigate();

	return (
		<>
			<HeaderTemplateBlock>
				<ul>
					<li style={{ listStyle:'none', float:'left',marginLeft : "1150px"}}>MYPAGE</li>
					<li style={{ listStyle:'none', float:'left',marginLeft : "40px"}}><Link to="/" style={{textDecoration:'none', color :"#000"}}>LOGOUT</Link></li>
					<li style={{ listStyle:'none', float:'left',marginLeft : "40px"}}>JOIN</li>
				</ul>

			</HeaderTemplateBlock>
			<BackgroundImage style={{ backgroundImage: `url(${image})` }}>
				<p
					style={{
						color: '#FACC15',
						fontSize: '42px',
						fontWeight: '700',
						margin: '0px',
						paddingTop: '30px',
						fontFamily: "'PT Serif', serif",
					}}
				>
					THE FILM
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
					of your life
				</p>
			</BackgroundImage>
		</>
	);
}

export default HeaderTemplateLogOut;
