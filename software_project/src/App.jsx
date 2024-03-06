import { Route, Routes } from "react-router-dom";
import LoginLayout from "./components/layouts/LoginLayout";
import SignupLayout from "./components/layouts/SignupLayout";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";

function App() {
	return (
		<div>
			{/* <Header /> */}
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route path='/login' element={<LoginLayout />} />
				<Route path='/signup' element={<SignupLayout />} />
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
