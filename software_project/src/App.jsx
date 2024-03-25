import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import LoginLayout from "./components/layouts/LoginLayout";
import SignupLayout from "./components/layouts/SignupLayout";
import Layout from "./pages/Layout";
import AddBookForm from "./components/ui/AddBookForm"
import BookList from "./components/ui/BookList";
import NotificationList from "./components/ui/NotificationList";
import RequestBook from "./components/ui/RequestBook";
import MessageList from "./components/ui/MessageList";
import Home from "./pages/Home";
import Requests from "./components/ui/Requests";
import History from "./components/ui/History";
import ProfileUpdate from "./components/ui/ProfileUpdate";

function App() {
	return (
		<div className="w-dvw bg-pri min-h-dvh">
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route path='/login' element={<LoginLayout />} />
				<Route path='/signup' element={<SignupLayout />} />
				<Route path='/home' element={<DashboardLayout />}>
					<Route path='' element={<Home />} />
					<Route path='addbook' element={<AddBookForm />}/>
					<Route path='findbook' element={<BookList/>} />
					<Route path='notifications' element={<NotificationList />} />
					<Route path='viewbook/:id' element={<RequestBook />} />
					<Route path='messages' element={<MessageList />} />
					<Route path='requests' element={<Requests/>} />
					<Route path='history' element= {<History />} />
					<Route path='profile' element={<ProfileUpdate />} />
				</Route>
				<Route path='/*' element={<div className="flex flex-col justify-center  h-dvh item-center"><h1 className="text-6xl text-orange-400 text-center">404 ERORR</h1></div>} />
				{/* 
					TODO
					About us Page.
				*/}
			</Routes>
		</div> 
	);
}

export default App;
