import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";

interface Iprops {
	summary: any;
}
const BacklinkDetailed: React.FC<Iprops> = ({ summary }) => {
	return (
		<div>
			<CardHolder>
				<SimpleCard BackTitle='Ranks' count={summary?.rank} />
				<SimpleCard BackTitle='BackLinks' count={summary?.backlinks} />
				<SimpleCard BackTitle='Crawled Pages' count={summary?.crawled_pages} />
				<SimpleCard
					BackTitle='Broken_backlinks'
					count={summary?.broken_backlinks}
				/>
			</CardHolder>

			<CardHolder>
				<SimpleCard
					BackTitle='Broken_pages

'
					count={summary?.broken_backlinks}
				/>
				<SimpleCard
					BackTitle='External_links'
					count={summary?.external_links_count}
				/>
				<SimpleCard BackTitle='Internal_links' count={summary?.crawled_pages} />
				<SimpleCard
					BackTitle='Backlinks_spam'
					count={summary?.backlinks_spam_score}
				/>
			</CardHolder>
		</div>
	);
};

export default BacklinkDetailed;

const CardHolder = styled.div`
	/* background-color: red; */
	/* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
	width: 98%;
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: center;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
