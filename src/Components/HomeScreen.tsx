import React from "react";
import HowItWork from "./HowItWork/HowItWork";
import Hero from "./LandingComp/Hero";
import OfferComp from "./OfferComp/OfferComp";
import Plans from "./Plans/Plans";

const Homescreen = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<Hero />
			<OfferComp />
			<HowItWork />
			<Plans />
		</div>
	);
};

export default Homescreen;
