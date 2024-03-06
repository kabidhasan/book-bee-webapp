import { Link } from "react-router-dom";
import Button from "./Button";
function LoginForm() {
	return (
		<>
			<div className='font-pt text-white text-4xl drop-shadow-sm font-semibold'>
				WELCOME TO BOOKBEE
			</div>
			<div className='font-pt text-ter text-2xl'>Login to your account</div>
			<form className='w-full m-10 px-16'>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-xl text-white'>
							Email
						</span>
					</label>
					<input
						type='email'
						className='input-success input-lg font-pt h-14 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-xl text-white'>
							Password
						</span>
					</label>
					<input
						type='password'
						className='input-success input-lg font-pt h-14 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>
				<div className='form-control mt-12 m-auto w-fit'>
					<Link to='/home'>
						<Button
							text='Login'
							style='bg-sec text-white text-2xl font-medium w-fit h-20  px-20'
						/>
					</Link>
				</div>
			</form>
			<div className='text-gray-400 font-pt text-xl'>
				Don&#39;t have an account?
				<Link
					to='/signup'
					className='text-orange-700 px-2 font-bold drop-shadow-xl'
				>
					Create Account
				</Link>
			</div>
		</>
	);
}

export default LoginForm;
