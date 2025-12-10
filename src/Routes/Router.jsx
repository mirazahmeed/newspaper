import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../Components/Profile";
import Loading from "../Components/Loading";
import About from "../Pages/About";

const Router = createBrowserRouter([
	{
		path: "/",
		loader: () => fetch(`/news.json`),
		element: <HomeLayout></HomeLayout>,
		children: [
			{
				path: "",
				element: <Home></Home>,
			},
			{
				path: "/category/:id",
				loader: () => fetch(`/news.json`),
				element: <CategoryNews></CategoryNews>,
				hydrateFallbackElement: <Loading></Loading>,
			},
			{
				path: "/about",
				element: <About></About>,
			}
		],
	},
	{
		path: "/auth",
		element: <AuthLayout></AuthLayout>,
		children: [
			{
				path: "/auth/register",
				element: <Register></Register>,
			},
			{
				path: "/auth/login",
				element: <Login></Login>,
			},
			{
				path: "/auth/profile",
				element: <Profile></Profile>,
			},
		],
	},
	{
		path: "/news_details/:id",
		loader: () => fetch(`/news.json`),
		element: (
			<PrivateRoute>
				<NewsDetails></NewsDetails>
			</PrivateRoute>
		),
		hydrateFallbackElement: <Loading></Loading>,
	},
	{
		path: "/*",
		element: <h2>Not Found</h2>,
	},
]);

export default Router;
