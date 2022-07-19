import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MainTemplate from './components/MainTemplate';
import HeaderTemplate from './components/HeaderTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: 
  #F5F5F5;
}
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<HeaderTemplate></HeaderTemplate>
			<MainTemplate></MainTemplate>
		</>
	);
}

export default App;
