import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
	const { signIn } = use(AuthContext);
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log({ email, password });
		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div>
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
				<h2 className="text-2xl font-bold text-center py-5">
					Login Your account
				</h2>
				<div className="card-body">
					<form onSubmit={handleLogin} className="fieldset">
						{/* email */}
						<label className="label">Email</label>
						<input
							type="email"
							name="email"
							defaultValue={"miraz07ahmed@gmail.com"}
							className="input rounded-none"
							placeholder="Enter your email"
							required
						/>
						{/* password */}
						<label className="label">Password</label>
						<input
							type="password"
							name="password"
							defaultValue={"Mm11223344*#"}
							className="input rounded-none"
							placeholder="Enter your password"
						/>
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button className="btn btn-neutral mt-4 rounded-none">
							Login
						</button>
						<Link
							to="/auth/register"
							className="link link-hover pt-3">
							Don't have an account?{" "}
							<span className="text-secondary">Register</span>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
