import React from "react";
import { Outlet } from "react-router";
import Header from "../COmponents/Header";

const HomeLayout = () => {
	return (
		<div>
			<header>
				<Header />
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
