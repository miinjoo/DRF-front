import React from 'react';
import styled from 'styled-components';
import './Footer.css';

const FooterBlock = styled.div`
	height: 360px;
	width: 1440px;
	display: flex;

	justify-content: center;
	align-items: center;
	background-color: black;
`;

function Footer() {
	return (
		<FooterBlock>
			<div className="footer-container">
				<div className="footer-etc">
					<h3 className="footer-head">ETC</h3>
					<p className="footer-etctext">개인정보 처리 방침</p>
					<p className="footer-etctext">자주 묻는 질문</p>
					<p className="footer-etctext">사업자 정보</p>
					<p className="footer-etctext">사업자 등록 번호</p>
				</div>

				<div className="footer-us">
					<h3 className="footer-head">Contact Us</h3>
					<p className="footer-ustext">10f abc buliding</p>
					<p className="footer-ustext">gangnam, seoul, korea</p>
					<p className="footer-ustext">81-2-1234-0000</p>
					<p className="footer-ustext">info@abc.com</p>
				</div>

				<div className="footer-blog">
					<h3 className="footer-head">From The Blog</h3>
					<p className="footer-blogtext">Lorem Ipsum Dolor Sit</p>
					<p className="footer-blogsubtext">On April 2020</p>
					<p className="footer-blogtext">Lorem Ipsum Dolor Sit</p>
					<p className="footer-blogsubtext">On April 2020</p>
					<p className="footer-blogtext">Lorem Ipsum Dolor Sit</p>
					<p className="footer-blogsubtext">On April 2020</p>
				</div>

				<small className="website-rights">
					Copyright by DRF TEAM2 All right reserved
				</small>
			</div>
		</FooterBlock>
	);
}

export default Footer;
