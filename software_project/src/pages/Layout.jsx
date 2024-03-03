import Footer from "./Footer";
import Header from "./Header";
import MainSection from "./MainSection";

function Layout() {
	return (
		<div className='h-dvh flex flex-col justify-between'>
			<div className='bg-sec w-full h-20 font-play'>
				<Header />
			</div>
			<div className='flex justify-evenly items-center flex-grow bg-pri w-full '>
				<MainSection />
			</div>
			<div className='bg-pri w-full h-1/8 text-xl text-white font-play'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
