import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ProfileDetails = () => {
	const { user, forgotPassword } = use(AuthContext);
	const handleForgotPassword = () => {
		const email = document.getElementById("loginEmail").value;

		if (!email) {
			setError("Please enter your email first.");
			return;
		}

		forgotPassword(email)
			.then(() => {
				alert("Password reset email sent! Check your inbox.");
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div className="flex flex-col items-center">
			<h2>Profile Details</h2>
			<img
				className="max-w-48 mt-5 mb-5"
				src={user && user.photoURL}
				alt=""
			/>
			<h2> Name: {user && user.displayName}</h2>
			<h2> Email: {user && user.email}</h2>
			<button className="btn btn-neutral mt-4 rounded-none" onClick={handleForgotPassword}>Forgot Password or Change your Password</button>
		</div>
	);
};

export default ProfileDetails;
