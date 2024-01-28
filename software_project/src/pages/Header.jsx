import { Link } from "react-router-dom";
function Header() {
	return (
		<div className='navbar bg-gradient-to-t from-blue-gray-900 to-gray-900'>
			<div className='flex-1'>
				<Link
					to='/'
					className='btn btn-ghost text-xl text-white hover: hover:text-blue-300 '
				>
					<img src='/book.png' height={50} width={50} className='pb-3' />
					BookBee
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link
							to='/login'
							className='btn btn-ghost text-xl text-white hover:text-yellow-300'
						>
							Login
						</Link>
					</li>
					<li>
						<Link
							to='/signup'
							className='btn btn-ghost text-xl text-white  hover:text-yellow-300'
						>
							Sign Up
						</Link>
					</li>
					<li>
						<Link
							to='/aboutus'
							className='btn btn-ghost text-xl text-white  hover:text-yellow-300'
						>
							About Us
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
