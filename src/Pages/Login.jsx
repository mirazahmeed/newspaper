import React from "react";
import { Link } from "react-router";

const Login = () => {
	return (
		<div>
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
				<h2 className="text-2xl font-bold text-center py-5">
					Login Your account
				</h2>
				<div className="card-body">
					<form className="fieldset">
						<label className="label">Email</label>
						<input
							type="email"
							className="input rounded-none"
							placeholder="Enter your email"
						/>
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
							Login
						</button>
                        <Link to="/auth/register" className="link link-hover pt-3">
                        Don't have an account? <span className="text-secondary">Register</span>
                        </Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
