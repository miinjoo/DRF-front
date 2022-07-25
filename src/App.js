import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import UpLoadMain from './pages/UpLoadMain';
import LoginUs from './pages/LoginUs';
import CommentPage from './pages/CommentPage';

const GlobalStyle = createGlobalStyle`
body{
	background: 
	#F5F5F5;
}
`;

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginUs />}></Route>
			<Route path="/mypage" element={<UpLoadMain />} />
			<Route path="/loginus" element={<LoginUs />}></Route>
			<Route path="/comment/:postId" element={<CommentPage />}></Route>
		</Routes>
	);
};

export default App;
