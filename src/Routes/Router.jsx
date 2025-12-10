import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const Router = createBrowserRouter([
	{
		path: "/",
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
			},
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
	},
	{
		path: "/*",
		element: <h2>Not Found</h2>,
	},
]);

export default Router;
