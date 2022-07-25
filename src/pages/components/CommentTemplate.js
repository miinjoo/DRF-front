import React from 'react';
import styled from 'styled-components';

const CommentTemplateBlock = styled.div`
	width: 640px;
	height: 100%;
	background-color: #ffffff;
	margin-top: 570px;
	margin-bottom: 0;
	flex-direction: column;
	display: flex;
	margin-left: 0;
`;

function CommentTemplate({ children }) {
	return <CommentTemplateBlock>{children}</CommentTemplateBlock>;
}

export default CommentTemplate;
