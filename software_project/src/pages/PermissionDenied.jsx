import Footer from "./Footer";
import Header from "./Header";

const PermissionDenied = () => {
	return (
		<>
			<Header></Header>
			<div className="py-4 h-[700px] w-fit flex flex-col mx-auto justify-center items-center">
				<img
					src="/access_denied.png"
					alt="Access Denied"
					className="h-[200px]  bg-prilight rounded-3xl"
				/>
			</div>
			<Footer></Footer>
		</>
	);
};

export default PermissionDenied;
