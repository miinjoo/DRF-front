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
		width: 500px;
		height: 15px;
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

function UpLoadMain() {
	// 받아온 데이터 저장하는 state
	const [posts, setPosts] = useState([]);
	// input에 입력된 게시글과 댓글
	const [newPost, setNewPost] = useState('');

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
				// ???? (전체 게시글 불러오기)
				getPosts(response.data);
			})
			.catch((error) => {
				console.log('삭제 실패', error);
			});
	};
	const navigate = useNavigate();
	const goComment = (id, photo) => {
		var postId = id;
		var postPhoto = photo;
		console.log(photo);
		navigate(`/comment/${postId}`, {
			state: { postId: postId, postPhoto: postPhoto },
		});
	};
	const [image, setImage] = useState({
		image_file: '',
		preview_URL: './image/inputbackground.png',
	});

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
						<button>작성</button>
					</form>
					<div className="upload">
						<input
							type="file"
							accept="image/*"
							onChange={saveImage}
							// 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
							// 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
							onClick={(e) => (e.target.value = null)}
							ref={(refParam) => (inputRef = refParam)}
							style={{ display: 'none' }}
						/>
						<button
							className="picturebtn"
							onClick={() => inputRef.click()}
						></button>
						<button className="uploadbtn" onClick={sendImageToServer}></button>
					</div>
					{posts.map((post) => {
						return (
							<div>
								<p
									onClick={() => goComment(post.id, post.photo)}
									style={{ background: 'black', height: '42px' }}
								>
									{post.title}
									<button onClick={() => onDelete(post.id)}>삭제</button>
								</p>
								<img
									style={{ width: '646px', height: '450px' }}
									src={post.photo}
								></img>
							</div>
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
