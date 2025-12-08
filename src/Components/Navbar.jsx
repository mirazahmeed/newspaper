import React from "react";
import { Link, NavLink } from "react-router";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center p-2 mt-2">
			<div></div>
			<div className="nav flex gap-5 text-accent">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/career">Career</NavLink>
			</div>
			<div className="login-area flex gap-2 items-center">
				<FaRegCircleUser className="text-4xl" />
				<Link to="/auth/login" className="btn btn-primary rounded-none">
					Login
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
