import { Link } from "react-router-dom";
function LandingPage() {
	return (
		<section>
			<div className='bg-blue-gray-900 text-white py-16'>
				<div className='container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24'>
					<div className='flex flex-col w-full lg:w-1/3 justify-center items-start p-8'>
						<div className='text-6xl p-2 text-orange-300 tracking-loose'>
							Book
						</div>
						<span className='text-6xl p-2 text-blue-200 tracking-loose'>
							Bee
						</span>
						<p className='text-xl text-gray-50 mb-4'>
							BookBee is a Dynamic Book Exchange Platform. Discover, Exchange,
							and Dive into a World of Books.
						</p>
						<Link
							to='/login'
							className='bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent'
						>
							Get Started
						</Link>
					</div>
					<div className='p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center'>
						<div className='h-48 flex flex-wrap content-center'>
							<div>
								<img
									className='inline-block mt-28 hidden xl:block'
									src='https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png'
								/>
							</div>
							<div>
								<img
									className='inline-block mt-24 md:mt-0 p-8 md:p-0'
									src='https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png'
								/>
							</div>
							<div>
								<img
									className='inline-block mt-28 hidden lg:block'
									src='https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LandingPage;
