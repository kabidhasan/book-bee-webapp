import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBookForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({});
	const [imageFile, setImageFile] = useState(null);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
		console.log(formData);
	};
	const handleImageChange = (e) => {
		setImageFile(e.target.files[0]);
	};
	const handleSubmit = async () => {
		const totalForm = new FormData();
		totalForm.append("image", imageFile);
		// totalForm.append("textData", formData);
		// totalForm.append("ABC", "xyz");
		for (var key in formData) {
			totalForm.append(key, formData[key]);
		}
		console.log("submitting");
		console.log(totalForm);
		await axios
			.post("http://20.244.96.143:3000/book/addBook", totalForm, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				if (res.status == 200) {
					toast.success("Book Added Successfully");
					//   navigate("/home");
				} else {
					notifyUnknownError();
				}
			})
			.catch((error) => {
				console.error(error);
				notifyUnknownError();
			});
	};
	const notifyUnknownError = () => {
		toast.error(
			"An unknown error occured. Please try again after a few minutes. "
		);
	};
	return (
		<div className='border-2 border-black w-full flex flex-col justify-center items-center rounded-sm'>
			<ToastContainer position="bottom-right" autoClose={3000}></ToastContainer>
			<div className="font-pt text-white text-3xl drop-shadow-sm font-semibold">
				ADD A BOOK TO SHARE
			</div>
			<div className="font-pt text-ter text-xl">
				Please Provide the Following details
			</div>
			<form
				className="w-full m-10 px-16"
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				<div className="form-control">
					<label className='label flex justify-start gap-5'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white" >
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
						</svg>
						<span className="label-text font-pt font-bold text-lg text-white">
							Book Name
						</span>
					</label>
					<input
						type="name"
						name="name"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-black focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Author
						</span>
					</label>
					<input
						type="name"
						name="author"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Publication
						</span>
					</label>
					<input
						type="name"
						name="publication"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Genre
						</span>
					</label>
					<input
						type="name"
						name="genre"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Language
						</span>
					</label>
					<input
						type="name"
						name="language"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Market Price (Taka)
						</span>
					</label>
					<input
						type="number"
						name="price"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Approximate Age of the Book (in Months)
						</span>
					</label>
					<input
						type="number"
						name="age"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Condition of the Book
						</span>
					</label>
					<input
						type="name"
						name="condition"
						className="input-success input-lg font-pt h-12 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
						required
					/>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text font-pt font-bold text-lg text-white">
							Photo of the Cover Page
						</span>
					</label>
					<input
						type="file"
						name="image"
						onChange={handleImageChange}
						className="input-success input-lg flex flex-col justify-center items-center font-pt  px-5 h-auto py-2 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
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

				<div className="form-control mt-9 " onClick={handleSubmit}>
					<Button
						text="Add Book"
						style="bg-sec text-white text-2xl font-medium w-fit h-16 m-auto px-16"
					/>
				</div>
			</form>
		</div>
	);
}

export default AddBookForm;
