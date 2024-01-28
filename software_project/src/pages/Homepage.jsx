import React from "react";

function Homepage() {
	return (
		<div className='h-screen p-5 bg-blue-gray-900'>
			<div className='w-full h-12 rounded-md border border-teal-700'>
				<ul className='menu menu-horizontal w-full text-white text-pretty text-xl justify-between px-6'>
					<li>Home</li>
					<li className='text-teal-700'>|</li>
					<li>Profile</li>
					<li className='text-teal-700'>|</li>
					<li>Chat</li>
					<li className='text-teal-700'>|</li>
					<li>Find Books</li>
					<li className='text-teal-700'>|</li>
					<li>Add a Book</li>
					<li className='text-teal-700'>|</li>
					<li>Notification</li>
				</ul>
			</div>
		</div>
	);
}
export default Homepage;
