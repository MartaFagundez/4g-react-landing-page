import React from "react";
import Navbar from "./navbar";
import HeroSection from "./hero-section";
import CardList from "./card-list";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<HeroSection></HeroSection>
			<CardList></CardList>
			<Footer></Footer>
		</>
	);
};

export default Home;
