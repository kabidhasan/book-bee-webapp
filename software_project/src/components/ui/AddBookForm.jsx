import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

function AddBookForm() {
  return (
    <>
			<div className='font-pt text-white text-3xl drop-shadow-sm font-semibold'>
				ADD A BOOK TO SHARE
			</div>
			<div className='font-pt text-ter text-xl'>Please Provide the Following details</div>
			<form className='w-full m-10 px-16'>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-lg text-white'>
							Book Name
						</span>
					</label>
					<input
						type='name'
						className='input-success input-lg font-pt h-12 bg-prilight rounded-none text-black focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-lg text-white'>
							Author
						</span>
					</label>
					<input
						type='name'
						className='input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>

				<div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-lg text-white'>
							Publication
						</span>
					</label>
					<input
						type='name'
						className='input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>
        <div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-lg text-white'>
							Genre
						</span>
					</label>
					<input
						type='name'
						className='input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>
        <div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-lg text-white'>
							Language
						</span>
					</label>
					<input
						type='name'
						className='input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-lg text-white'>
							Market Price (Taka)
						</span>
					</label>
					<input
						type='number'
						className='input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>
        <div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-lg text-white'>
							Approximate Age of the Book (in Months)
						</span>
					</label>
					<input
						type='number'
						className='input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>
        <div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-lg text-white'>
							Condition of the Book
						</span>
					</label>
					<input
						type='name'
						className='input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>

        <div className='form-control'>
					<label className='label'>
						<span className='label-text font-pt font-bold text-lg text-white'>
							Photo of the Cover Page
						</span>
					</label>
					<input
						type='file'
						className='input-success input-lg flex flex-col justify-center items-center font-pt  px-5 h-auto py-2 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2'
						required
					/>
				</div>

				{/* <div className='form-control font-play text-ter text-lg mt-4 justify-between items-center'>
					<center>
						By signing up for an account, I agree with BookBee’s
						<b className='text-white'> Terms of Use</b> and{" "}
						<b className='text-white'>Privacy Policy</b>.
					</center>
				</div> */}

				<div className='form-control mt-9 '>
					<Button
						text='Add Book'
						style='bg-sec text-white text-2xl font-medium w-fit h-16 m-auto px-16'
					/>
				</div>
			</form>
		</>
  )
}

export default AddBookForm;