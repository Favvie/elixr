import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import ImageOne from "../images/house-5.jpg";
import ImageTwo from "../images/house-6.jpg";

const Section = styled.section`
	width: 100%;
	height: 100%;
`;

const Container = styled.div`
	padding: 3rem calc((100vw - 1300px) / 2);

	h1 {
		font-size: clamp(1.5rem, 6vw, 2rem);
		padding-left: 2rem;
	}
`;

const ImageContainer = styled(Container)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 3rem 0rem;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const Arrow = styled(IoMdArrowRoundForward)`
	margin-left: 0.5rem;
`;

const Image = css`
	img {
		width: 100%;
		height: 100%;
		max-width: 600px;
		max-height: 400px;
		object-fit: cover;

		@media screen and (max-width: 768px) {
			width: 80%;
			height: 80%;
		}
	}

	h3 {
		margin-top: 1rem;
		font-size: clamp(0.9rem, 6vw, 1rem);
	}
`;
const LeftImage = styled.div`
	${Image}
	padding: 1rem 2rem;
`;

const RightImage = styled.div`
	${Image}
	margin-top: 50px;
	padding: 1rem 2rem;
`;

const HomeButton = styled(Button)`
	padding: 14px 0rem;
	justify-content: flex-start;
`;
const HomeSection = () => {
	return (
		<Section>
			<Container>
				<h1>View our newest Homes</h1>
				<ImageContainer>
					<LeftImage data-aos="fade-right">
						<img src={ImageOne} alt="house" />
						<h3>8 Bed 10 Bath House in Venice, California</h3>
						<HomeButton to="/" blank="true">
							View Details <Arrow />
						</HomeButton>
					</LeftImage>
					<RightImage data-aos="fade-left">
						<img src={ImageTwo} alt="house" />
						<h3>4 Bed 2 Bath House in Miami, Los Angeles</h3>
						<HomeButton to="/" blank="true">
							View Details <Arrow />
						</HomeButton>
					</RightImage>
				</ImageContainer>
			</Container>
		</Section>
	);
};

export default HomeSection;
