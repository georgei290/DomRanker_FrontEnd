import { useRoutes } from "react-router-dom";
import {
	BackLinkChecker,
	BusinessData,
	ContentAnalyzer,
	Keywords,
	OnPageData,
	SeoChecker,
} from "./Bundled";

const DashBoardRoutes = () => {
	let element = useRoutes([
		{
			path: "/seochecker",
			element: <SeoChecker />,
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
