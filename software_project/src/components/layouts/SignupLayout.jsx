import SignupForm from "../ui/SignupForm";

function SignupLayout() {
	return (
		<div className='w-full min-h-dvh flex justify-evenly items-center bg-pri'>
			<img src='/login.svg' className=' w-1/3' />
			<div className='flex flex-col justify-between items-center w-1/3'>
				<SignupForm />
			</div>
		</div>
	);
}

export default SignupLayout;
