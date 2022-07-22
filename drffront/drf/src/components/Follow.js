import React from 'react';
import styled from 'styled-components';
import profileimg from './user.png';

const TextAll = styled.div`
	font-size: 20px;
	font-weight: 700;
	color: #fff;
	display: inline-block;
	text-align: row;
	padding-right: 40px;
`;

const UserImg = styled.div`
	display: inline-block;
	padding-left: 35px;
`;

function Follow({ children }) {
	return (
		<>
			<p
				style={{
					fontSize: '24px',
					fontWeight: '700',
					color: '#fff',
					textAlign: 'center',
				}}
			>
				FOLLOWING
			</p>
			<UserImg>
				<img src={profileimg} style={{ width: '40px', height: '40px' }}></img>
				<p></p>
				<img src={profileimg} style={{ width: '40px', height: '40px' }}></img>
				<p></p>
				<img src={profileimg} style={{ width: '40px', height: '40px' }}></img>
				<p></p>
				<img src={profileimg} style={{ width: '40px', height: '40px' }}></img>
				<p></p>
				<img src={profileimg} style={{ width: '40px', height: '40px' }}></img>
				<p></p>
				<img src={profileimg} style={{ width: '40px', height: '40px' }}></img>
				<p></p>
				<img src={profileimg} style={{ width: '40px', height: '40px' }}></img>
			</UserImg>

			<TextAll style={{ float: 'right' }}>
				<p style={{ margin: '0px' }}>문상훈</p>
				<p style={{ fontSize: '12px', margin: '0px' }}>@moonbdns</p>
				<p style={{ marginBottom: '0px', marginTop: '17px' }}>박정아</p>
				<p style={{ fontSize: '12px', margin: '0px' }}>_jjeong333_</p>
				<p style={{ marginBottom: '0px', marginTop: '17px' }}>문정원</p>
				<p style={{ fontSize: '12px', margin: '0px' }}>@moon032483</p>
				<p style={{ marginBottom: '0px', marginTop: '17px' }}>전새얀</p>
				<p style={{ fontSize: '12px', margin: '0px' }}>@yaaaaaan_</p>
				<p style={{ marginBottom: '0px', marginTop: '17px' }}>배유나</p>
				<p style={{ fontSize: '12px', margin: '0px' }}>@yoona_zzing_01</p>
				<p style={{ marginBottom: '0px', marginTop: '17px' }}>임명옥</p>
				<p style={{ fontSize: '12px', margin: '0px' }}>@myungok88</p>
				<p style={{ marginBottom: '0px', marginTop: '17px' }}>이고은</p>
				<p style={{ fontSize: '12px', margin: '0px' }}>@leegoeun6</p>
			</TextAll>
		</>
	);
}

export default Follow;
