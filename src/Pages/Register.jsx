import React from "react";
import { Link } from "react-router";

const Register = () => {
	return (
		<div>
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
				<h2 className="text-2xl font-bold text-center py-5">
					Register Your account
				</h2>
				<div className="card-body">
					<form className="fieldset">
						{/* Name */}
						<label className="label">Name</label>
						<input
							type="text"
							className="input rounded-none"
							placeholder="Enter your name"
						/>
						{/* PhotoURL */}
						<label className="label">PhotoURL</label>
						<input
							type="text"
							className="input rounded-none"
							placeholder="Enter your photo URL"
						/>
						{/* Email */}
						<label className="label">Email</label>
						<input
							type="email"
							className="input rounded-none"
							placeholder="Enter your email"
						/>
						{/* Password */}
						<label className="label">Password</label>
						<input
							type="password"
							className="input rounded-none"
							placeholder="Enter your password"
						/>
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button className="btn btn-neutral mt-4 rounded-none">
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
