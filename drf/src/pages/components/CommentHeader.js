import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Vector from './Vector.svg';
import studio from './studio.svg';
import spot from './spot.svg';
import print from './print.svg';
import comment from './comment.svg';

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
	figcaption {
		&:hover {
			color: black;
		}
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
				<img className="gobackbtn" src={Vector}></img>
				<figcaption>GO BACK</figcaption>
			</figure>
			<figure>
				<img className="commentbtn" src={comment}></img>
				<figcaption className="select">COMMENT</figcaption>
			</figure>
			<figure>
				<img className="studiobtn" src={studio}></img>
				<figcaption>STUDIO</figcaption>
			</figure>
			<figure>
				<img className="spotbtn" src={spot}></img>
				<figcaption>SPOT</figcaption>
			</figure>
			<figure>
				<img className="printbtn" src={print}></img>
				<figcaption>PRINT</figcaption>
			</figure>
		</CommentHeaderBlock>
	);
}

export default CommentHeader;
