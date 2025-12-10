import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
	const { createUser, setUser, updateUser } = use(AuthContext);
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [nameError, setNameError] = useState("");
	const [photoURLError, setPhotoURLError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		if (name.length < 5) {
			setNameError("Name must be at least 5 characters long");
		} else {
			setNameError("");
		}
		const photoURL = form.photoURL.value;
		if (photoURL === "") {
			setPhotoURLError("Photo URL is required");
		} else {
			setPhotoURLError("");
		}
		const email = form.email.value;
		if (email === "") {
			setEmailError("Email is required");
		} else {
			setEmailError("");
		}
		const password = form.password.value;
		if (password === "") {
			setPasswordError("Password is required");
		} else {
			setPasswordError("");
		}
		createUser(email, password)
			.then((result) => {
				const user = result.user;
				updateUser({
					displayName: name,
					photoURL: photoURL,
				})
					.then(() => {
						setUser({ ...user, name, photoURL });
						navigate("/");
					})
					.catch((error) => {
						const errorMessage = error.message;
						setError(errorMessage);
						setUser(user);
					});
			})
			.catch((error) => {
				const errorMessage = error.message;
				// const errorCode = error.code;
				setError(errorMessage);
			});
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
							required
						/>
						{nameError && (
							<p className="text-red-500">{nameError}</p>
						)}
						{/* PhotoURL */}
						<label className="label">PhotoURL</label>
						<input
							type="text"
							name="photoURL"
							defaultValue={
								"https://i.ibb.co.com/yFTqG53J/8578.jpg"
							}
							className="input rounded-none"
							placeholder="Enter your photo URL"
							required
						/>
						{photoURLError && (
							<p className="text-red-500">{photoURLError}</p>
						)}
						{/* Email */}
						<label className="label">Email</label>
						<input
							type="email"
							name="email"
							defaultValue={"miraz07ahmed@gmail.com"}
							className="input rounded-none"
							placeholder="Enter your email"
							required
						/>
						{emailError && (
							<p className="text-red-500">{emailError}</p>
						)}
						{/* Password */}
						<label className="label">Password</label>
						<input
							type="password"
							name="password"
							defaultValue={"Mm11223344*#"}
							className="input rounded-none"
							placeholder="Enter your password"
							required
							minLength="8"
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
						/>
						{passwordError && (
							<p className="text-red-500">{passwordError}</p>
						)}
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
