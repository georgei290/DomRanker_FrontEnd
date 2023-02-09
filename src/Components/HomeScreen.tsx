import React from "react";
import ClientFeedback from "./ClientFeedback/ClientFeedback";
import Footer from "./Footer/Footer";
import HowItWork from "./HowItWork/HowItWork";
import Hero from "./LandingComp/Hero";
import OfferComp from "./OfferComp/OfferComp";
import Plans from "./Plans/Plans";
import StartPro from "./StartPro/StartPro";

const Homescreen = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<Hero />
			<OfferComp />
			<HowItWork />
			<Plans />
			<ClientFeedback />
			<StartPro />
			<Footer />
		</div>
	);
};

export default Homescreen;
