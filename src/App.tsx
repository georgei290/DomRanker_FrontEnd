import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeRoutes from "./Components/AllRoutes/HomeRoutes";
import Header from "./Components/Header/Header";

function App() {
	return (
		<div>
			<Header />
			<HomeRoutes />
		</div>
	);
}

export default App;
