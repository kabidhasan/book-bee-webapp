import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import LoginLayout from "./components/layouts/LoginLayout";
import SignupLayout from "./components/layouts/SignupLayout";
import Layout from "./pages/Layout";
import AddBookForm from "./components/ui/AddBookForm"
import BookList from "./components/ui/BookList";
import NotificationList from "./components/ui/NotificationList";

function App() {
	return (
		<div className="bg-pri flex flex-col min-h-dvh ">
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route path='/login' element={<LoginLayout />} />
				<Route path='/signup' element={<SignupLayout />} />
				<Route path='/home' element={<DashboardLayout />}>
					<Route path='addbook' element={<AddBookForm />}/>
					<Route path='findbook' element={<BookList/>} />
					<Route path='notifications' element={<NotificationList />} />
				</Route>
				<Route path='/*' element={<h1>404 ERORR</h1>} />
				{/* 
					TODO
					About us Page.
				*/}
			</Routes>
		</div> 
	);
}

export default App;
