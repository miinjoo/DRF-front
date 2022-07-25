import React from 'react';
import HeaderTemplate from './components/HeaderTemplate';
import styled, { createGlobalStyle } from 'styled-components';
import MenuBarTemplate from './components/MenuBarTemplate';
import image from './loginBG.png';
import logLogo from './loginLogo.png';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
body{
	background: 
	#F5F5F5;
}
`;

const BackgroundImage = styled.div`
	width: 1110px;
	height: 930px;
	text-align: center;
    background-size: cover;
    background-position: center;
    border-left : 165px solid #000;
    border-right : 165px solid #000;
`;


function LoginUs(){

    return (
        <>
            <GlobalStyle />
			<HeaderTemplate></HeaderTemplate>
            <MenuBarTemplate></MenuBarTemplate>
            <BackgroundImage style={{ backgroundImage: `url(${image})` }}>
            <img src={logLogo} style={{marginTop:'309px',marginLeft:'370px',marginRight:'370px'}}></img> 
            <LoginForm></LoginForm>
            </BackgroundImage>
			<Footer></Footer>
        </>
    );
};

export default LoginUs;