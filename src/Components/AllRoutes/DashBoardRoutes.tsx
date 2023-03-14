import { useRoutes } from "react-router-dom";
import PrivateRoute from "../../utils/PrivateRoute";
import {
	BackLinkChecker,
	BusinessData,
	ContentAnalyzer,
	Keywords,
	OnPageData,
	SeoChecker,
	SeoSearchEngine,
	DetaildOnpage,
	KewWordTable,
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
			children: [
				{
					index: true,
					element: <OnPageData />,
				},

				{
					path: "detail/:id",
					element: <DetaildOnpage />,
				},
			],
		},
		{
			path: "/keywords",
			children: [
				{
					index: true,
					element: <KewWordTable />,
				},

				{
					path: ":id",
					element: <Keywords />,
				},
			],
		},
	]);

	return element;
};

export default DashBoardRoutes;
