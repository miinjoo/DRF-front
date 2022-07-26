import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import image from './background.png';

const MainTemplateBlock = styled.div`
	width: 292px;
	height: 2200px;
	position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
	margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
	float: left;
`;

const Square = styled.div`
<<<<<<< HEAD
=======

>>>>>>> bccbfc4262b05a257c6f4210d6597bb81f80688b
	width: 240px;
	height: 550px;
	margin-top: 80px;
	margin-left: 30px;
	margin-right: 26px;

`;

function MainTemplateLeft({ children }) {
	return (
		<>
			{' '}
			<MainTemplateBlock
				style={{
					background: `url(${image})`,
					backgroundSize: 'cover',
					opacity: '0.8',
				}}
			>
				<Square>
					<Profile></Profile>
				</Square>
			</MainTemplateBlock>
		</>
	);
}

export default MainTemplateLeft;
