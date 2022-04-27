import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import ImageOne from "../images/house-4.jpg";

const Section = styled.section`
	// overflow-y: hidden;
	width: 100%;
	height: 100vh;
	background-color: #000d1a;

	@media screen and (max-width: 768px) {
		// height: 170vh;
	}
`;

const Container = styled.div`
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}

	display: grid;
	grid-template-rows: 700px;
	grid-template-columns: 1.1fr 1.2fr;
	align-items: center;
`;

const ColumnLeft = styled.div`
	background: #fff;
	padding: 3rem;

	h1 {
		padding: 2rem 0;
		font-size: clamp(1rem, 6vw, 2rem);
	}
	p {
		padding-bottom: 2rem;
	}
	@media screen and (min-width: 768px) {
		padding: 3rem;
	}

	@media screen and (min-width: 1400px) {
		padding: 3rem calc((100vw - 1350px) / 2);
	}
`;

const ColumnRight = styled.div`
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const InteriorSection = () => {
	return (
		<Section>
			<Container>
				<ColumnLeft data-aos="fade-up">
					<h1>Stunning Interior</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
						reprehenderit iste perferendis cupiditate in incidunt? Lorem ipsum
						dolor sit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
						veniam!
					</p>
					<Button to="/" data-aos="fade-down">
						Learn More
					</Button>
				</ColumnLeft>
				<ColumnRight data-aos="fade-down">
					<img src={ImageOne} alt="" />
				</ColumnRight>
			</Container>
		</Section>
	);
};

export default InteriorSection;
