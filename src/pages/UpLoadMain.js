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
import { useNavigate } from 'react-router-dom';
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
	.Titleinputform {
		color: orange;
		margin-left: 5px;
		margin-bottom: 3px;
	}
	.upload {
		background: url('./image/inputbackground.png');
		width: 646px;
		height: 450px;
		margin-left: 0;
		margin-top: 8px;
	}
	.uploadbtn {
		background: url('./image/uploadbtn.png') no-repeat;
		width: 100px;
		height: 100px;
		border: none;
		margin-top: 5%;
		margin-left: 42%;
		cursor: pointer;
	}
	.picturebtn {
		width: 150px;
		height: 130px;
		border: none;
		background: url('./image/inputimageupload.png') no-repeat;
		margin-top: 27%;
		margin-left: 37%;
		cursor: pointer;
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
		background: url('./image/등록버튼.png') no-repeat;
		border: none;
		cursor: pointer;
		width: 100px;
		height: 30px;
		margin-right: 10px;
		margin-left: 525px;
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

function UpLoadMain() {
	// 받아온 데이터 저장하는 state
	const [posts, setPosts] = useState([]);
	const [singlePost, setSinglePost] = useState({});
	const [comments, setComments] = useState([]);
	// input에 입력된 게시글과 댓글
	const [newPost, setNewPost] = useState('');

	// 새로고침 될 때 마다 실행됩니다.
	useEffect(() => {
		getPosts();
	}, []);

	// 전체 게시글 조회 함수
	const getPosts = async () => {
		const response = await axios
			.get('https://dy6578.pythonanywhere.com/api/posts/')
			.then((response) => {
				// ?? (전체 게시글 저장)
				setPosts(response.data);
			})
			.catch((error) => {
				console.log('전체 글 불러오기 실패', error.message);
			});
	};

	// 새로운 게시글 작성 함수
	const PostSubmit = (e) => {
		e.preventDefault();

		// 아래 코드 중 .post("??", {})에서 { }도 채워주세요 !!
		axios
			.post('https://dy6578.pythonanywhere.com/api/posts/', {
				title: '제 목',
				author: 1,
				content: newPost,
			})
			.then((response) => {
				// ?? (게시글 불러오기)
				getPosts();
			})
			.catch((error) => {
				console.log('작성 실패');
			});

		// ???? (input 비우기)
		setNewPost('');
	};

	// 새로운 댓글 작성 함수

	// 게시글 삭제 함수
	const onDelete = (id) => {
		axios
			.delete(`https://dy6578.pythonanywhere.com/api/posts/${id}`)
			.then((response) => {
				// ???? (전체 게시글 불러오기)
				getPosts(response.data);
			})
			.catch((error) => {
				console.log('삭제 실패', error);
			});
	};
	const navigate = useNavigate();
	const goComment = (id) => {
		var postId = id;
		navigate(`/comment/${postId}`, { state: { postId: postId } });
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
					<form onSubmit={PostSubmit}>
						<input
							className="Titleinputform"
							placeholder="새 게시글 작성하기 "
							value={newPost}
							onChange={(e) => setNewPost(e.target.value)}
						/>
						<button>작성</button>
					</form>
					<div className="upload">
						<button className="picturebtn"></button>
						<button className="uploadbtn"></button>
					</div>
					{posts.map((post) => {
						return (
							<p
								onClick={() => goComment(post.id)}
								style={{ border: '1px solid red' }}
							>
								{post.content}
								<button onClick={() => onDelete(post.id)}>삭제</button>
							</p>
						);
					})}
				</TitleInput>
			</ImageTemplate>
			<FrameTemplate></FrameTemplate>
			<MainTemplateRight></MainTemplateRight>
			<Footer></Footer>
		</>
	);
}

export default UpLoadMain;
