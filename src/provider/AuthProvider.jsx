import React, { createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		photoURL: "",
	});
	const authData = {
		user,
		setUser,
	};
	return <AuthContext value={authData}></AuthContext>;
};

export default AuthProvider;
export { AuthContext };
