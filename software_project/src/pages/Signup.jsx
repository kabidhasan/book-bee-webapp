import { Link } from "react-router-dom";
function Signup() {
	return (
		<div className='hero min-h-screen flex-col justify-center bg-blue-gray-900'>
			<div className='hero-content flex-col justify-center'>
				<img src='/logo.png' width={90} height={90} className='pb-6' />
				<h1 className='text-3xl text-center font-medium text-orange-600 px-10'>
					Create new account
				</h1>
				<form className='w-full'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text text-white'>Full Name</span>
						</label>
						<input
							type='text'
							className='input h-11 focus:border-teal-500 bg-blue-gray-900 border-gray-500 text-white'
							required
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text text-white'>Email</span>
						</label>
						<input
							type='email'
							className='input h-11 focus:border-teal-500 bg-blue-gray-900 border-gray-500 text-white'
							required
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text text-white'>Password</span>
						</label>
						<input
							type='password'
							className='input h-11 focus:border-teal-500 bg-blue-gray-900 border-gray-500 text-white'
							required
						/>
					</div>
					<div className='form-control mt-6'>
						<button className='btn btn-ghost bg-purple-800 hover:bg-orange-700 text-white'>
							Sign Up
						</button>
					</div>
				</form>
				<div className='text-gray-400'>
					Already have an account?
					<Link to='/login' className='text-orange-600 px-2'>
						Sign in
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Signup;
