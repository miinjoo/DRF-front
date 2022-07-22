import React from 'react';
import styled from 'styled-components';

const FullBox = styled.div`
	width: 645px;
	height: 60px;
	background-color: #000;
	float: left;
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	color: #e0d5cd;
	padding: 14px;
	box-sizing: border-box;
`;

const BlackBox = styled.div`
	width: 615px;
	hegit: 480px;
	background-color: #000;
`;

function ImageTemplate({ children }) {
	return (
		<>
			<FullBox>제목을 입력하세요(최대 14자){children}</FullBox>
		</>
	);
}

export default ImageTemplate;
