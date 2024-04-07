import DashHeader from "../../pages/DashHeader";
import Footer from "../../pages/Footer";
import Profile from "../../pages/Profile";
import Navbar from "../ui/Navbar";
import { Outlet } from "react-router-dom";
import TopContributors from "../ui/TopContributors";
import PermissionDenied from "../../pages/PermissionDenied";

const user = {
	name: "Adnan Chowdhury",
	email: "helloworld@gmail.com",
	imageUrl:
		"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
	bio: "I am a software developer. I love tutorial books.",
	location: "Akhalia, Sylhet, Bangladesh",
	joined: "March 2021",
	points: 100,
};

function DashboardLayout() {
	if (!localStorage.getItem("userId")) {
		console.log();
		return <PermissionDenied />;
	}
	return (
		<>
			<div className="container mx-auto mb-auto bg-pri">
				<DashHeader />
				<Navbar />
				<main className="w-full h-auto flex divide-x-2 divide-black/50">
					<div className="w-4/6 p-4 pl-0 flex flex-col justify-start items-center">
						<Outlet />
					</div>
					<div className="w-2/6 p-4 pr-0">
						<Profile user={user} />
						<TopContributors />
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default DashboardLayout;
