import { Link } from "react-router-dom";
function LoginPage() {
	return (
		<div className='hero min-h-screen flex-col justify-center bg-pri'>
			<div className='hero-content flex-col justify-center'>
				<img src='/book.png' width={90} height={90} className='pb-6' />
				<h1 className='text-3xl text-center font-medium text-teal-400 px-8'>
					Log in to your account
				</h1>
				<form className='w-full'>
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
						<button className='btn btn-ghost bg-teal-500 hover:bg-teal-600 text-black'>
							Login
						</button>
					</div>
				</form>
				<div className='text-gray-400'>
					Don&#39;t have an account?
					<Link to='/signup' className='text-teal-500 px-2'>
						Create an account
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
