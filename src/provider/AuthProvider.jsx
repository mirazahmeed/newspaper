import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// Sign In with Email and Password
	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// Sign In With Google
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	// Update User
	const updateUser = (userInfo) => {
		return updateProfile(auth.currentUser, userInfo);
	};

	const logout = () => {
		setLoading(true);
		return signOut(auth);
	};
	const forgotPassword = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const authData = {
		user,
		setUser,
		createUser,
		signIn,
		googleSignIn,
		logout,
		loading,
		setLoading,
		updateUser,
		forgotPassword,
	};
	return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
export { AuthContext };
