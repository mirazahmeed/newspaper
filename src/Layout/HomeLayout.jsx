import React from "react";
import { Outlet } from "react-router";
import Header from "../COmponents/Header";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
	return (
		<div>
			<header>
				<Header />
				<section className="container mx-auto">
					<LatestNews />
				</section>
			</header>
			<section className="left_nav"></section>
			<section className="main_content">
				<Outlet></Outlet>
			</section>
			<section className="right_nav"></section>
		</div>
	);
};

export default HomeLayout;
