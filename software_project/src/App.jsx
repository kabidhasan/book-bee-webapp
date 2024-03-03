import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";

function App() {
	return (
		<div>
			{/* <Header /> */}
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/home' element={<Homepage />} />
				{/* 
					TODO
					About us Page.
				*/}
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
