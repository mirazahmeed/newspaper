import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ProfileDetails = () => {
	const { user } = use(AuthContext);
	return (
		<div className="flex flex-col items-center">
			<h2>Profile Details</h2>
			<img className="w-24 h-24 rounded-full" src={user && user.photoURL} alt="" />
			<h2>{user && user.displayName}</h2>
			<h2>{user && user.email}</h2>
		</div>
	);
};

export default ProfileDetails;
