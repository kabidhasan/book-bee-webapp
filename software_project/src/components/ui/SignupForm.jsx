import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = async () => {
    console.log("submitting");
    await axios
      .post("http://20.244.96.143:3000/auth/register", formData)
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          navigate("/login");
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
    <>
      <ToastContainer autoClose={3000} position="bottom-right"></ToastContainer>
      <div className="font-pt text-white text-4xl drop-shadow-sm font-semibold">
        WELCOME TO BOOKBEE
      </div>
      <div className="font-pt text-ter text-2xl">Register for your Account</div>
      <form className="w-full m-10 px-16" onChange={handleChange}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-pt font-bold text-xl text-white">
              Email Address
            </span>
          </label>
          <input
            type="email"
            name="email"
            className="input-success input-lg font-pt h-14 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-pt font-bold text-xl text-white">
              Full Name
            </span>
          </label>
          <input
            type="name"
            name="name"
            className="input-success input-lg font-pt h-14 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-pt font-bold text-xl text-white">
              Password
            </span>
          </label>
          <input
            type="password"
            name="password"
            className="input-success input-lg font-pt h-14 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-pt font-bold text-xl text-white">
              Confirm Password
            </span>
          </label>
          <input
            type="password"
            name="confirmedPassword"
            className="input-success input-lg font-pt h-14 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
            required
          />
        </div>
        <div className="form-control font-play text-ter text-xl mt-4 justify-between items-center">
          <center>
            By signing up for an account, I agree with BookBee’s
            <b className="text-white"> Terms of Use</b> and{" "}
            <b className="text-white">Privacy Policy</b>.
          </center>
        </div>

        <div className="form-control mt-9 " onClick={handleSubmit}>
          <Button
            text="Sign Up"
            style="bg-sec text-white text-2xl font-medium w-fit h-20 m-auto px-20"
          />
        </div>
      </form>
      <div className="text-gray-400 font-pt text-xl">
        Already have an account?
        <Link
          to="/login"
          className="text-orange-700 px-2 font-bold drop-shadow-xl"
        >
          Login
        </Link>
      </div>
    </>
  );
}

export default SignupForm;
