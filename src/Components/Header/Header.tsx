import React, { useEffect } from "react";
import styled from "styled-components";
import SideBarComp from "../SideBar/SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
	const [sideShow, setSideShow] = React.useState(false);

	const toggleSideBar = () => {
		setSideShow(!sideShow);
	};

	useEffect(() => {
		if (sideShow) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, []);

	return (
		<Container>
			<Logo />
			<NavHolder>
				<Nav>Home</Nav>
				<Nav>About Us</Nav>
				<Nav>Services</Nav>
				<Nav>Contact Us</Nav>
			</NavHolder>
			<ButtonHold>
				<MyButton>Login</MyButton>
			</ButtonHold>

			<Menu onClick={toggleSideBar}>
				<GiHamburgerMenu />
			</Menu>

			{sideShow ? <SideBarComp /> : null}
		</Container>
	);
};

export default Header;

const Menu = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		display: block;
		margin-right: 30px;
		font-size: 30px;
		cursor: pointer;
	}
`;

const MyButton = styled.button`
	width: 100px;
	height: 48px;
	border: none;
	outline: none;
	color: white;
	background-color: #ae67fa;
	border-radius: 5px;
	transition: all 350ms;
	font-weight: 900;
	font-family: Imported;
	cursor: pointer;

	:hover {
		transform: scale(0.98);
	}
`;
const ButtonHold = styled.div`
	margin-right: 70px;

	@media screen and (max-width: 790px) {
		display: none;
	}
`;

const Logo = styled.div`
	width: 130px;
	background-color: #ae67fa;
	height: 40px;
	margin-left: 70px;

	@media screen and (max-width: 790px) {
		margin-left: 30px;
	}
`;
const NavHolder = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 790px) {
		margin-right: 10px;
		display: none;
	}
`;
const Nav = styled.div`
	margin-right: 25px;
	margin-left: 25px;
	color: #3e4581;
	cursor: pointer;

	transition: all 350ms;
	:hover {
		transform: scale(0.98);
		text-decoration: underline;
	}
`;

const Container = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	background-color: #f8f8ff;
	z-index: 999;
`;
