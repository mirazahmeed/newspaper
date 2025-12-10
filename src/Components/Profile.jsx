import React, { use } from "react";
import ProfileDetails from "../Pages/ProfileDetails";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

const Profile = () => {
	const { user } = use(AuthContext);
	const navigate = useNavigate();
	return (
		<div>
			<ProfileDetails />
		</div>
	);
};

export default Profile;
