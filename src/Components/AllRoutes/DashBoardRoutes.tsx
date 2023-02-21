import { useRoutes } from "react-router-dom";
import {
	BackLinkChecker,
	BusinessData,
	ContentAnalyzer,
	Keywords,
	OnPageData,
	SeoChecker,
	SeoSearchEngine,
} from "./Bundled";

const DashBoardRoutes = () => {
	let element = useRoutes([
		{
			path: "/seochecker",
			children: [
				{
					index: true,
					element: <SeoSearchEngine />,
				},
				{
					path: "search",
					element: <SeoChecker />,
				},
			],
		},

		{
			path: "/backlinkchecker",
			element: <BackLinkChecker />,
		},
		{
			path: "/businessdata",
			element: <BusinessData />,
		},
		{
			path: "/contentanalyzer",
			element: <ContentAnalyzer />,
		},

		{
			path: "/onpagedata",
			element: <OnPageData />,
		},
		{
			path: "/keywords",
			element: <Keywords />,
		},
	]);

	return element;
};

export default DashBoardRoutes;
