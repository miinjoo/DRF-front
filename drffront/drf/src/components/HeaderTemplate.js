import React from 'react';
import styled from 'styled-components';

const HeaderTemplateBlock = styled.div`
	width: 1920px;
	height: 60px;
	background-color: #232020;
	margin: 0 auto;
	margin-top: 0;
	margin-bottom: 0;

	display: flex;
	position: relative;
`;

function HeaderTemplate({ children }) {
	return <HeaderTemplateBlock>{children}</HeaderTemplateBlock>;
}

export default HeaderTemplate;
