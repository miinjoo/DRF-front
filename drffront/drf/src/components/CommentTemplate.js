import React from 'react';
import styled from 'styled-components';

const CommentTemplateBlock = styled.div`
	width: 645px;
	height: 700px;
	background-color: #ffffff;
	margin: 0; /* 페이지 중앙에 나타나도록 설정 */
	margin-top: 400px;
	margin-bottom: 0;
	flex-direction: column;
	display: flex;
	z-index: 10;
`;

function CommentTemplate({ children }) {
	return <CommentTemplateBlock>{children}</CommentTemplateBlock>;
}

export default CommentTemplate;
