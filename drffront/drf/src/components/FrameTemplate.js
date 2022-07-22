import React from 'react';
import styled from 'styled-components';

const Full = styled.div`
	width: 105px;
	height: 2200px;
	background-color: #000;
	float: left;
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
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
				<WhiteBox>{children}</WhiteBox>
			</Full>
		</>
	);
}

export default FrameTemplate;
