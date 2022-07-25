import React from 'react';
import styled from 'styled-components';
import profileimg from './user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faGear } from '@fortawesome/free-solid-svg-icons';

const TextAll = styled.div`
	font-size: 20px;
	font-weight: 700;
	color: #fff;
`;

function Profile({ children }) {
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
				PROFILE
			</p>

			<img src={profileimg} style={{ width: '80px', height: '80px' }}></img>

			<TextAll>
				<p style={{ fontSize: '32px', fontWeight: '700', color: '#fff' }}>
					홍진경
				</p>
				<p>@jinkyunghong</p>
				<p>
					한 줄 소개 <FontAwesomeIcon icon={faPen} />
				</p>
				<p>저는 커서 공부 왕찐천재가 될 거에요</p>
				<p>팔로워 NN명</p>
				<p>
					관리 | 통계 <FontAwesomeIcon icon={faGear} />
				</p>
			</TextAll>
		</>
	);
}

export default Profile;
