// import React from 'react'
import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import { SliderData } from "../data/SliderData";
import GlobalStyle from "../globalStyles";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import HomeSection from "../components/HomeSection";
import InteriorSection from "../components/InteriorSection";
import AOS from "aos";
import "aos/dist/aos.css";
const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);

		const toggle = () => {
			setIsOpen(!isOpen);
		};

		useEffect(() => {
			AOS.init({ duration: 1000 });
		}, []);
    return (
			<>
				<GlobalStyle />
				<Navbar toggle={toggle} />
				<Dropdown isOpen={isOpen} toggle={toggle} />
				<Hero slides={SliderData} />
				<InfoSection {...InfoData} />
				<HomeSection AOS={AOS} />
				<InteriorSection />
				<InfoSection {...InfoDataTwo} />
			</>
		);
}

export default Homepage
