import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
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
<<<<<<< HEAD
	&:hover {
		color: #facc15;
	}
=======
>>>>>>> bccbfc4262b05a257c6f4210d6597bb81f80688b
`;

function MenuBarTemplate({ children }) {
	return (
		<>
			<Menu>
				<Blank></Blank>
<<<<<<< HEAD
				<ButtonB>
					<Link to="/mypage" style={{ color: '#fff', textDecoration: 'none' }}>
						HOME
					</Link>
				</ButtonB>
=======
				<ButtonB ><Link to="/mypage" style={{color:'#fff',textDecoration:'none'}}>HOME</Link></ButtonB>
>>>>>>> bccbfc4262b05a257c6f4210d6597bb81f80688b
				<ButtonB>FILM</ButtonB>
				<ButtonB>STUDIO</ButtonB>
				<ButtonB>MARK</ButtonB>
			</Menu>
		</>
	);
}

export default MenuBarTemplate;