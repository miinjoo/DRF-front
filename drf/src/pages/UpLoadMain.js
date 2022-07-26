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
import './scroll.css';

const GlobalStyle = createGlobalStyle`
body{
	background: 
	#F5F5F5;
}
`;
const TitleInput = styled.div`
	width: 670px;
	height: 2200px;
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
		width: 500px;
		height: 15px;
		background-color: #000;
		border: none;
		height: 23px;
		font-size: 20px;
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
	.trashbtn {
		width: 28px;
		height: 33px;
		background: url('./image/trash.png');
		background-size: cover;
		float: right;
		margin-top: 3px;
		margin-right: 45px;
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

function UpLoadMain() {
	// 받아온 데이터 저장하는 state
	const [posts, setPosts] = useState([]);
	const [newPost, setNewPost] = useState('');
	const [image, setImage] = useState({
		image_file: '',
		preview_URL: './image/inputbackground.png',
	});
	// 새로고침 될 때 마다 실행됩니다.
	useEffect(() => {
		getPosts();
	}, []);

	// 전체 게시글 조회 함수
	const getPosts = async () => {
		const response = await axios
			.get('http://zimnii.pythonanywhere.com/posts')
			.then((response) => {
				// (전체 게시글 저장)
				setPosts(response.data);
			})
			.catch((error) => {
				console.log('전체 글 불러오기 실패', error.message);
			});
	};

	// 새로운 게시글 작성 함수
	const PostSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://zimnii.pythonanywhere.com/posts', {
				title: newPost,
				photo:
					'http://zimnii.pythonanywhere.com/media/post_photo/KakaoTalk_20210901_232318133_23.jpg',
				user: '밍',
			})
			.then((response) => {
				//(게시글 불러오기)
				getPosts();
			})
			.catch((error) => {
				console.log('작성 실패');
			});

		//(input 비우기)
		setNewPost('');
	};

	// 게시글 삭제 함수
	const onDelete = (id) => {
		axios
			.delete(`http://zimnii.pythonanywhere.com/posts/${id}`)
			.then((response) => {
				// (전체 게시글 불러오기)
				getPosts(response.data);
			})
			.catch((error) => {
				console.log('삭제 실패', error);
			});
	};
	const navigate = useNavigate();
	const goComment = (id, photo, title) => {
		var postId = id;
		var postPhoto = photo;
		var postTitle = title;
		console.log('title', title);
		navigate(`/comment/${postId}`, {
			state: { postId: postId, postPhoto: postPhoto, postTitle: postTitle },
		});
	};

	let inputRef;

	const saveImage = (e) => {
		e.preventDefault();
		const fileReader = new FileReader();

		if (e.target.files[0]) {
			fileReader.readAsDataURL(e.target.files[0]);
		}
		fileReader.onload = () => {
			setImage({
				image_file: e.target.files[0],
				preview_URL: fileReader.result,
			});
		};
	};

	const sendImageToServer = async () => {
		if (image.image_file) {
			const formData = new FormData();
			formData.append('file', image.image_file);
			await axios.post('/api/image/upload', formData);
			alert('서버에 등록이 완료되었습니다!');
			setImage({
				image_file: '',
				preview_URL: './image/inputbackground.png',
			});
		} else {
			alert('사진을 등록하세요!');
		}
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
						<button
							style={{
								float: 'right',
								marginRight: '30px',
								background: 'black',
								border: 'white solid 1px',
								color: 'white',
								cursor: 'pointer',
								marginBottom: '3px',
							}}
						>
							작성
						</button>
					</form>
					<div className="scroll">
						<div className="upload">
							<input
								type="file"
								accept="image/*"
								onChange={saveImage}
								onClick={(e) => (e.target.value = null)}
								ref={(refParam) => (inputRef = refParam)}
								style={{ display: 'none' }}
							/>
							<button
								className="picturebtn"
								onClick={() => inputRef.click()}
							></button>
							<button
								className="uploadbtn"
								onClick={sendImageToServer}
							></button>
						</div>
						{posts.map((post) => {
							return (
								<div style={{ background: 'black' }}>
									{' '}
									<p
										onClick={() => goComment(post.id, post.photo, post.title)}
										style={{
											background: 'black',
											height: '42px',
											cursor: 'pointer',
										}}
									>
										{post.title}
										<button
											className="trashbtn"
											onClick={() => onDelete(post.id)}
										></button>
									</p>
									<img
										style={{ width: '646px', height: '450px' }}
										src={post.photo}
									></img>
								</div>
							);
						})}
					</div>
				</TitleInput>
			</ImageTemplate>
			<FrameTemplate></FrameTemplate>
			<MainTemplateRight></MainTemplateRight>
			<Footer></Footer>
		</>
	);
}

export default UpLoadMain;
