import Button from "./Button";

function Navbar() {
	return (
		<ul className='h-14 grid grid-cols-6 font-pt  text-black border-x border-y bg-prilight border-black w-full my-2 shadow-md '>
			<Button
				text='Home'
				style='h-full text-xl border-x border-black font-normal'
			/>
			<Button
				text='Profile'
				style='h-full text-xl border-x border-black font-normal'
			/>
			<Button
				text='Add a Book'
				style='h-full text-xl border-x border-black font-normal'
			/>
			<Button
				text='Find a Book'
				style='h-full text-xl border-x border-black font-normal'
			/>
			<Button
				text='Messages'
				style='h-full text-xl border-x border-black font-normal'
			/>
			<Button
				text='Notifications'
				style='h-full text-xl border-x border-black font-normal'
			/>
		</ul>
	);
}

export default Navbar;
