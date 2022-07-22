import React from 'react';
import styled from 'styled-components';

const CommentHeaderBlock = styled.div`
	margin-top: 20px;
	margin-left: 15px;
	display: flex;
	figure {
		text-align: center;
		margin-right: 19px;
	}
	img {
		width: 33.33px;
		height: 33.33px;
	}
`;

function CommentHeader() {
	return (
		<CommentHeaderBlock>
			<figure>
				<img className="gobackbtn" src="./image/Vector.svg"></img>
				<figcaption>GO BACK</figcaption>
			</figure>
			<figure>
				<img className="commentbtn" src="./image/comment.svg"></img>
				<figcaption>COMMENT</figcaption>
			</figure>
			<figure>
				<img className="spotbtn" src="./image/spot.svg"></img>
				<figcaption>SPOT</figcaption>
			</figure>
			<figure>
				<img className="studiobtn" src="./image/studio.svg"></img>
				<figcaption>STUDIO</figcaption>
			</figure>
			<figure>
				<img className="printbtn" src="./image/print.svg"></img>
				<figcaption>PRINT</figcaption>
			</figure>
		</CommentHeaderBlock>
	);
}

export default CommentHeader;
