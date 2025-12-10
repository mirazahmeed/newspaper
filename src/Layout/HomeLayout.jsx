import React from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router";
import Header from "../COmponents/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LestAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import Loading from "../Components/Loading";

const HomeLayout = () => {
	const data = useLoaderData();
	
	const { state } = useNavigate();
	return (
		<div>
			<header>
				<Header />
				<section className="container mx-auto">
					<LatestNews data={data}/>
				</section>
				<nav className="container mx-auto">
					<Navbar />
				</nav>
			</header>
			<main className="container mx-auto grid grid-cols-12 gap-4">
				<aside className="left_nav col-span-3 sticky top-0 h-fit">
					<LestAside />
				</aside>
				<section className="main_content col-span-6">
					{state === "loading" ? (
						<Loading></Loading>
					) : (
						<Outlet></Outlet>
					)}
				</section>
				<aside className="right_nav col-span-3 sticky top-0 h-fit">
					<RightAside />
				</aside>
			</main>
		</div>
	);
};

export default HomeLayout;
