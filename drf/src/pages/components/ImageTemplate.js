import React from 'react';
import styled from 'styled-components';

const FullBox = styled.div`
	width: 646px;
	height: 1000px;
	float: left;
	line-height: 32px;
	color: #e0d5cd;
	box-sizing: border-box;
	background: #ffffff; ;
`;
function ImageTemplate({ children }) {
	return (
		<>
			<FullBox>{children}</FullBox>
		</>
	);
}

export default ImageTemplate;
