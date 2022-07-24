import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import CommentHeader from './components/CommentHeader';
import CommentTemplate from './components/CommentTemplate';
import MainTemplateLeft from './components/MainTemplateLeft';
import MainTemplateRight from './components/MainTemplateRight';
import FrameTemplate from './components/FrameTemplate';
import ImageTemplate from './components/ImageTemplate';
import MenuBarTemplate from './components/MenuBarTemplate';
import HeaderTemplate from './components/HeaderTemplate';
import Uploader from './components/Uploader';

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
const CommentText = styled.div`
	font-size: 14px;
	border: 1px solid #e5e7eb;
	margin-left: 10px;
	margin-right: 10px;
	margin-bottom: 5px;
	margin-top: 5px;
	color: black;
`;

function App() {
	// 받아온 데이터 저장하는 state
	const [posts, setPosts] = useState([]);
	const [singlePost, setSinglePost] = useState({});
	const [comments, setComments] = useState([]);

	// input에 입력된 게시글과 댓글
	const [newPost, setNewPost] = useState('');
	const [newComment, setNewComment] = useState('');

	// 상세 조회하고자 하는 게시글의 id
	const id = 33;

	// 새로고침 될 때 마다 실행됩니다.
	useEffect(() => {
		getPosts();
		getSinglePost();
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

	// 특정 게시글 조회
	const getSinglePost = async () => {
		const response = await axios
			.get(`https://dy6578.pythonanywhere.com/api/posts/${id}`)
			.then((response) => {
				// ?? (특정 게시글 저장)
				// ?? (댓글 저장)
				setSinglePost(response.data);
				setComments(response.data.comment);
			})
			.catch((error) => {
				console.log('글 하나 불러오기 실패');
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
	const CommentSubmit = (e) => {
		e.preventDefault();

		// 아래 코드 중 .post("????", { })에서 { }도 채워주세요 !!
		axios
			.post('https://dy6578.pythonanywhere.com/api/comments/', {
				post: id,
				author: 1,
				content: newComment,
			})
			.then((response) => {
				// ?? (게시글 불러오기)
				// ?? (특정 게시글 불러오기)
				getPosts();
				getSinglePost();
			})
			.catch(function (error) {
				console.log('댓글 작성 실패', error);
			});

		// ??? (input 비우기)
		setNewComment('');
	};

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

	return (
		<>
			<GlobalStyle />
			<HeaderTemplate />
			<MenuBarTemplate />
			<MainTemplateLeft />
			<FrameTemplate />
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
					<Uploader />
					{posts.map((post) => {
						return (
							<p style={{ border: '1px solid red' }}>
								{post.content}
								<button onClick={() => onDelete(post.id)}>삭제</button>
							</p>
						);
					})}
				</TitleInput>

				<CommentTemplate>
					<CommentHeader />
					<CommentAdd>
						<img className="profile" src="./image/profile.svg"></img>
						<form onSubmit={CommentSubmit}>
							<input
								placeholder="댓글 작성하기"
								value={newComment}
								onChange={(e) => setNewComment(e.target.value)}
							/>
							<button></button>
						</form>
					</CommentAdd>
					{comments.map((comment) => {
						return (
							<CommentItemBlock>
								<img className="profile" src="./image/profile.svg"></img>
								<CommentText>
									<p>{comment.content}</p>
								</CommentText>
								<img className="repltbtn" src="./image/답글버튼.png"></img>
							</CommentItemBlock>
						);
					})}
				</CommentTemplate>
			</ImageTemplate>
			<FrameTemplate></FrameTemplate>
			<MainTemplateRight></MainTemplateRight>
		</>
	);
}

export default App;
