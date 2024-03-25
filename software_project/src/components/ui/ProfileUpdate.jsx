import React from 'react'
import Button from './Button';

function ProfileUpdate() {
  return (
    <div className='border-2 border-black w-full flex flex-col justify-center items-center rounded-sm'>
			{/* <ToastContainer position="bottom-right" autoClose={3000}></ToastContainer> */}
			<div className="font-pt text-white text-3xl drop-shadow-sm font-semibold">
				Update Your Profile
			</div>
			<div className="font-pt text-ter text-xl">
				Please Provide the Following details to complete your profile
			</div>
			<form
				className="w-full m-10 px-16"
				// onChange={handleChange}
				// onSubmit={handleSubmit}
			>
				
			
				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Address
						</span>
					</label>
					<input
						type="name"
						name="address"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							District
						</span>
					</label>
					<input
						type="name"
						name="district"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>
				
				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							About Yourself
						</span>
					</label>
					<input
						type="text-area"
						name="status"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Cover Photo
						</span>
					</label>
					<input
						type="file"
						name="image"
                        // TODO : Add onChange={handleImageChange} to the input tag
						// onChange={}
						className="input-success input-lg flex flex-col justify-center items-center font-pt  px-5 h-auto py-2 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>


				<div className="form-control mt-9 " 
                // onClick={}
                >
					<Button
						text="Update"
						style="bg-sec text-white text-2xl font-medium w-fit h-16 m-auto px-16"
					/>
				</div>
			</form>
		</div>
	);
}

export default ProfileUpdate;