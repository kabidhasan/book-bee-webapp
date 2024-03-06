const SignUpForm = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-green-800'>
			<div className='bg-white rounded-lg shadow-lg p-8 max-w-md'>
				<h2 className='text-2xl font-bold mb-6 text-center'>
					WELCOME TO BOOKBEE
				</h2>
				<p className='text-gray-600 mb-6 text-center'>
					Register for your account
				</p>
				<div className='mb-4'>
					<label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
						Your Name
					</label>
					<input
						type='text'
						id='name'
						placeholder='Your name here'
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
						Your Email
					</label>
					<input
						type='email'
						id='email'
						placeholder='Your email here'
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='password'
						className='block text-gray-700 font-bold mb-2'
					>
						Your Password
					</label>
					<input
						type='password'
						id='password'
						placeholder='Your password here'
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
				</div>
				<div className='mb-6'>
					<label
						htmlFor='confirmPassword'
						className='block text-gray-700 font-bold mb-2'
					>
						Confirm Password
					</label>
					<input
						type='password'
						id='confirmPassword'
						placeholder='Your password here'
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
				</div>
				<p className='text-gray-600 text-sm mb-6'>
					By signing up for an account, I agree with lounges Terms of Use,
					Privacy Policy, and the default Notification Settings.
				</p>
				<button className='bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 w-full mb-6'>
					Sign Up
				</button>
				<p className='text-gray-600 text-sm text-center mb-4'>
					Or Sign up using
				</p>
				<div className='flex justify-center mb-6'>
					<button className='bg-white text-gray-600 font-bold py-2 px-4 rounded-md mr-2 hover:bg-gray-100'>
						<i className='fab fa-google'></i>
					</button>
					<button className='bg-white text-gray-600 font-bold py-2 px-4 rounded-md mr-2 hover:bg-gray-100'>
						<i className='fab fa-discord'></i>
					</button>
					<button className='bg-white text-gray-600 font-bold py-2 px-4 rounded-md hover:bg-gray-100'>
						<i className='fab fa-facebook'></i>
					</button>
				</div>
				<p className='text-gray-600 text-sm text-center'>
					Already have an account?{" "}
					<a href='#' className='text-green-500 hover:underline'>
						Log in here
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default SignUpForm;
