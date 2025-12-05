import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Header from "../COmponents/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LestAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";



const HomeLayout = () => {
	return (
		<div>
			<header>
				<Header />
				<section className="container mx-auto">
					<LatestNews />
				</section>
				<nav className="container mx-auto">
					<Navbar />
				</nav>
			</header>
			<main className="container mx-auto grid grid-cols-12">
				<aside className="left_nav col-span-3">
					<LestAside />
				</aside>
				<section className="main_content col-span-6">
					<Outlet></Outlet>
				</section>
				<aside className="right_nav col-span-3">
					<RightAside />
				</aside>
			</main>
		</div>
	);
};

export default HomeLayout;
