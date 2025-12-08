import React from "react";
import { Link } from "react-router";

const Register = () => {
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, photoURL, email, password);
	};
	return (
		<div>
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
				<h2 className="text-2xl font-bold text-center py-5">
					Register Your account
				</h2>
				<div className="card-body">
					<form onSubmit={handleRegister} className="fieldset">
						{/* Name */}
						<label className="label">Name</label>
						<input
							type="text"
							name="name"
							defaultValue={"Miraz"}
							className="input rounded-none"
							placeholder="Enter your name"
						/>
						{/* PhotoURL */}
						<label className="label">PhotoURL</label>
						<input
							type="text"
							name="photoURL"
							defaultValue={
								"https://i.ibb.co.com/B2CQ44N5/alrick-gillard-0m-N84vxig-L0-unsplash.jpg"
							}
							className="input rounded-none"
							placeholder="Enter your photo URL"
						/>
						{/* Email */}
						<label className="label">Email</label>
						<input
							type="email"
							name="email"
							defaultValue={"miraz07ahmed@gmail.com"}
							className="input rounded-none"
							placeholder="Enter your email"
						/>
						{/* Password */}
						<label className="label">Password</label>
						<input
							type="password"
							name="password"
							defaultValue={"123456"}
							className="input rounded-none"
							placeholder="Enter your password"
						/>
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button
							type="submit"
							className="btn btn-neutral mt-4 rounded-none">
							Register
						</button>
						<Link to="/auth/login" className="link link-hover pt-3">
							Already have an account?{" "}
							<span className="text-secondary">Login</span>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
