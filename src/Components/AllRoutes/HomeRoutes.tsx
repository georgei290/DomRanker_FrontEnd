import React from "react";
import { useRoutes } from "react-router";
import Homescreen from "../HomeScreen";

const HomeRoutes = () => {
	let element = useRoutes([
		{
			path: "/",
			element: <Homescreen />,
		},
	]);
	return element;
};

export default HomeRoutes;
