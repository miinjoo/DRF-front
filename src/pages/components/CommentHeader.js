import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdLocalMovies, FcComments } from 'react-icons/fa';

const CommentHeaderBlock = styled.div`
	margin-top: 20px;
	margin-left: 15px;
	display: flex;
	figure {
		text-align: center;
		margin-right: 9px;
		font-size: 17px;
		cursor: pointer;
	}
	img {
		width: 33px;
		height: 33px;
	}
	.select {
		color: black;
	}
`;

function CommentHeader() {
	const navigate = useNavigate();
	const goUpload = () => {
		navigate('/mypage');
	};
	return (
		<CommentHeaderBlock>
			<figure onClick={goUpload} className="gobackfigure">
				<img className="gobackbtn" src="./image/Vector.svg"></img>
				<figcaption>GO BACK</figcaption>
			</figure>
			<figure>
				<img className="commentbtn" src="./image/comment.svg"></img>
				<figcaption className="select">COMMENT</figcaption>
			</figure>
			<figure>
				<img className="studiobtn" src="./image/studio.svg"></img>
				<figcaption>STUDIO</figcaption>
			</figure>
			<figure>
				<img className="spotbtn" src="./image/spot.svg"></img>
				<figcaption>SPOT</figcaption>
			</figure>
			<figure>
				<img className="printbtn" src="./image/print.svg"></img>
				<figcaption>PRINT</figcaption>
			</figure>
		</CommentHeaderBlock>
	);
}

export default CommentHeader;
