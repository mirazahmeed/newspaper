import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
	const { user, logout } = use(AuthContext);
	const handleLogout = () => {
		logout()
			.then(() => {
				console.log("Logout");
				alert("Logout successfully");
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div className="flex justify-between items-center p-2 mt-2">
			{user && user.email}
			<div></div>
			<div className="nav flex gap-5 text-accent">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/career">Career</NavLink>
			</div>
			<div className="login-area flex gap-2 items-center">
				<FaRegCircleUser className="text-4xl" />

				{user ? (
					<button
						onClick={handleLogout}
						className="btn btn-primary rounded-none">
						Logout
					</button>
				) : (
					<Link
						to="/auth/login"
						className="btn btn-primary rounded-none">
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
