import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import MainTemplateLeft from './components/MainTemplateLeft';
import MainTemplateRight from './components/MainTemplateRight';
import FrameTemplate from './components/FrameTemplate';
import ImageTemplate from './components/ImageTemplate';
import MenuBarTemplate from './components/MenuBarTemplate';
import HeaderTemplateLogOut from './components/HeaderTemplateLogOut';
import Footer from './components/Footer';
import CommentHeader from './components/CommentHeader';
import CommentTemplate from './components/CommentTemplate';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import profile from './components/profile.svg';
import 등록버튼 from './components/등록버튼.png';
import 답글버튼 from './components/답글버튼.png';
const GlobalStyle = createGlobalStyle`
body{
	background: 
	#F5F5F5;
}
`;
const TitleInput = styled.div`
	width: 670px;
	height: 60px;
	background-color: #000;
	float: left;
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	color: #e0d5cd;
	box-sizing: border-box;
	h1 {
		margin-top: 3px;
		margin-bottom: 20px;
	}
	.upload {
		background: black;
		width: 646px;
		height: 450px;
		margin-left: 0;
		margin-top: 0;
		margin-bottom: 0px;
	}
	.back {
		width: 646px;
		height: 50px;
		background: #000;
		margin-top: 0px;
	}
`;
const CommentAdd = styled.div`
	margin-left: 30px;
	margin-right: 30px;
	align-items: center;
	border: 1px solid black;
	margin-bottom: 35px;
	.profile {
		width: 30px;
		height: 30px;
		margin-left: 10px;
		margin-top: 5px;
	}
	input {
		margin-bottom: 8px;
	}
	button {
		border: none;
		cursor: pointer;
		margin-right: 10px;
		margin-left: 515px;
	}
	.repltbtn {
		float: right;
		margin-right: 12px;
		margin-top: 7px;
		margin-bottom: 7px;
	}
	input {
		height: 90px;
		width: 95%;
		margin-left: 10px;
		border: 1px solid #e5e7eb;
	}
`;
const CommentItemBlock = styled.div`
	margin-left: 30px;
	margin-right: 30px;
	align-items: center;
	border-top: 1px solid black;
	margin-bottom: 22px;
	border-bottom: 1px solid black;
	.profile {
		width: 30px;
		height: 30px;
		margin-left: 10px;
		margin-top: 5px;
	}
	.repltbtn {
		margin-left: 10px;
		margin-top: 5px;
	}
`;
const CommentText = styled.div`
	font-size: 14px;
	border: 1px solid #e5e7eb;
	margin-left: 10px;
	margin-right: 10px;
	margin-bottom: 5px;
	margin-top: 5px;
	color: black;
`;

const CommentPage = () => {
	// 받아온 데이터 저장하는 state
	const location = useLocation();
	const id = location.state.postId;
	const photo = location.state.postPhoto;
	console.log(location.state);

	const [posts, setPosts] = useState([]);
	const [singlePost, setSinglePost] = useState({});
	const [comments, setComments] = useState([]);

	// input에 입력된 게시글과 댓글
	const [newComment, setNewComment] = useState('');

	// 상세 조회하고자 하는 게시글의 id

	// 새로고침 될 때 마다 실행됩니다.
	useEffect(() => {
		getSinglePost();
	}, []);

	// 특정 게시글 조회
	const getSinglePost = async () => {
		const response = await axios
			.get(`http://zimnii.pythonanywhere.com/posts/${id}/comments`)
			.then((response) => {
				setComments(response.data);
			})
			.catch((error) => {
				console.log('글 하나 불러오기 실패');
			});
	};

	// 새로운 댓글 작성 함수
	const CommentSubmit = (e) => {
		e.preventDefault();

		// 아래 코드 중 .post("????", { })에서 { }도 채워주세요 !!
		axios
			.post(`http://zimnii.pythonanywhere.com/posts/${id}/comments`, {
				comment: newComment,
				user: '밍',
			})
			.then((response) => {
				getSinglePost();
			})
			.catch(function (error) {
				console.log('댓글 작성 실패', error);
			});
		setNewComment('');
	};

	return (
		<>
			<GlobalStyle />
			<HeaderTemplateLogOut></HeaderTemplateLogOut>
			<MenuBarTemplate></MenuBarTemplate>
			<MainTemplateLeft></MainTemplateLeft>
			<FrameTemplate></FrameTemplate>
			<ImageTemplate>
				<TitleInput>
					<h1>{singlePost.content}</h1>
					<div style={{ background: 'black' }}>
						<img src={photo} className="upload"></img>
					</div>

					<div className="back"></div>
				</TitleInput>

				<CommentTemplate>
					<CommentHeader />
					<CommentAdd>
						<img className="profile" src={profile}></img>
						<form onSubmit={CommentSubmit}>
							<input
								placeholder="댓글 작성하기"
								value={newComment}
								onChange={(e) => setNewComment(e.target.value)}
							/>
							<button>
								<img src={등록버튼}></img>
							</button>
						</form>
					</CommentAdd>
					{comments.map((comment) => {
						return (
							<CommentItemBlock>
								<img className="profile" src={profile}></img>
								<CommentText>
									<p>{comment.comment}</p>
								</CommentText>
								<img className="repltbtn" src={답글버튼}></img>
							</CommentItemBlock>
						);
					})}
				</CommentTemplate>
			</ImageTemplate>
			<FrameTemplate></FrameTemplate>
			<MainTemplateRight></MainTemplateRight>
			<Footer></Footer>
		</>
	);
};

export default CommentPage;
