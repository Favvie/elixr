import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from "../images/bars.svg";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
	height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	z-index: 100;
	position: fixed;
	width: 100%;
	background: transparent;

	&.active {
		background: #cd853f;
	}
`;

const NavLink = css`
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	text-decoration: none;
`;

const Logo = styled(Link)`
	${NavLink}
	font-style: italic;
`;

const MenuBars = styled(FaBars)`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		background-image: url(${Bars});
		background-size: contain;
		height: 30px;
		width: 30px;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-50%, 50%);
		color: white;
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -48px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavMenuLinks = styled(Link)`
	${NavLink}

	&:hover {
		color: #000;
	}
`;

const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 760px) {
		display: none;
	}
`;

const Navbar = ({ toggle }) => {
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {

		if (window.scrollY >= 60) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeBackground);
	return (
		<Nav className={navbar && "active"}>
			<Logo to="/">ELIXR</Logo>
			<MenuBars onClick={toggle} />
			<NavMenu>
				{menuData.map((item, index) => (
					<NavMenuLinks to={item.link} key={index}>
						{item.title}
					</NavMenuLinks>
				))}
			</NavMenu>
			<NavBtn>
				<Button to="/contact" primary="true">
					Contact Us
				</Button>
			</NavBtn>
		</Nav>
	);
};

export default Navbar;
