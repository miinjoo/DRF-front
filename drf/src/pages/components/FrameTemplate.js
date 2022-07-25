import React from 'react';
import styled from 'styled-components';

const Full = styled.div`
	width: 25px;
	height: 2200px;
	background-color: #000;
	float: left;
	justify-contents: center;
`;

const WhiteBox = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff;
	margin-left: 35px;
	margin-right: 35px;
	margin-top: 40px;
`;

function FrameTemplate({ children }) {
	return (
		<>
			<Full>
				
			</Full>
		</>
	);
}

export default FrameTemplate;
