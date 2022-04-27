import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";

const About = () => {
	const [current, setCurrent] = useState(0);

	return (
		<HeroSection>
			<HeroWrapper>
				<h1>COMING SOON </h1>
			</HeroWrapper>
		</HeroSection>
	);
};

const HeroSection = styled.section`
	height: 90vh;
	max-height: 1100px;
	position: relative;
	overflow: hidden;
`;
const HeroWrapper = styled.div`
	width: 100%;
	height:	 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
`;

const HeroContent = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	max-width: 1600px;
	width: calc(100% - 100px);
	color: #fff;
	transition: 0.3s;

	&.hover {
		transform: translateY(-10px);
	}
	h1 {
		font-size: clamp(1rem, 8vw, 2rem);
		font-weight: 400;
		text-transform: uppercase;
		text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
		text-align: left;
		margin-bottom: 0.8rem;
	}
`;

export default About;
