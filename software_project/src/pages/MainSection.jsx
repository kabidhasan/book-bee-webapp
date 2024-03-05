import Button from "/src/components/ui/Button";
function MainSection() {
	return (
		<>
			<div className='h-96 w-2/5'>
				<div className='text-9xl font-play font-bold text-white first-letter:text-orange-600'>
					Book Bee
				</div>
				<div className='text-2xl font-pt text-ter'>
					BookBee is a Dynamic Book Exchange Platform. Discover, Exchange, and
					Dive into a World of Books.
				</div>
				<Button
					text='Exchange Now'
					style='text-2xl h-20 mt-16 bg-sec text-ter font-bold'
				/>
			</div>
			<img src='/bb.svg' className='h-2/3' />
		</>
	);
}

export default MainSection;
