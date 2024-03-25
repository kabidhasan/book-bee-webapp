import Footer from "./Footer";
import Header from "./Header";
import MainSection from "./MainSection";

function Layout() {
	return (
		<div className='h-dvh w-dvw flex flex-col justify-between'>
			<div className='bg-sec w-dvw h-20 font-play'>
				<Header />
			</div>
			<div className='mt-auto flex flex-col md:flex-row justify-evenly items-center flex-grow bg-pri w-dvw'>
				<MainSection />
			</div>
			<div className='bg-pri w-dvw h-1/8 text-xl'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
