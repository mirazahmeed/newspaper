import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
	const { user, logout } = use(AuthContext);
	const handleLogout = () => {
		logout()
			.then(() => {
				alert("Logout successfully");
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	return (
		<div className="flex justify-between items-center p-2 mt-2">
			<div></div>
			<div className="nav flex gap-5 text-accent">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/career">Career</NavLink>
			</div>
			<div className="login-area flex gap-2 items-center">
				{/* handle profile */}
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							{user ?(<img
								alt="Profile"
								src={user && user.photoURL}
							/>): (<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/> )}
						</div>
					</div>
					<ul
						tabIndex="-1"
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						<li>
							<Link to="/auth/profile" className="justify-between">
								Profile
							</Link>
						</li>
						<li>
							<Link to="/auth/register" className="justify-between">
								Register
							</Link>
						</li>
						<li>
							{/* Login and Logout */}
							{user ? (
								<button onClick={handleLogout} className="">
									Logout
								</button>
							) : (
								<Link to="/auth/login">Login</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
