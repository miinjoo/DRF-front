import React from 'react';
import styled from 'styled-components';

const MainTemplateBlock = styled.div`
	width: 1485px;
	height: 1000px;

	position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
	background: #e5e7eb;

	margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

	display: flex;
	flex-direction: column;
`;

function MainTemplate({ children }) {
	return <MainTemplateBlock>{children}</MainTemplateBlock>;
}

export default MainTemplate;
