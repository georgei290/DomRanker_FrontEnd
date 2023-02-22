import React from "react";
import styled from "styled-components";

interface Iprops {
	avatar: any;
}

const EmptyData: React.FC<Iprops> = ({ avatar }) => {
	return (
		<BottomEmptyData>
			<ImageDiv>
				<img src={avatar} alt='image' />
			</ImageDiv>
			<Desc>
				This endpoint will provide you with search volume, monthly searches,
				competition, and other related data for up to 1000 keywords in a single
				request.
			</Desc>
		</BottomEmptyData>
	);
};

export default EmptyData;

const BottomEmptyData = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`;
const ImageDiv = styled.div`
	margin: 15px 0;
	img {
		width: 250px;
	}
`;
const Desc = styled.div`
	width: 700px;
	text-align: center;
	font-size: 13px;

	@media (max-width: 700px) {
		width: 80%;
	}
`;
