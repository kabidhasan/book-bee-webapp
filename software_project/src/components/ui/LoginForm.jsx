import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const navigate = useNavigate();
  const notifyInvalidCredentials = () => {
    console.log("notify");
    toast.error("Invalid Credentials");
  };
  const handleLogin = async (event) => {
    console.log(email);
    console.log(password);
    await axios
      .post("http://20.244.96.143:3000/auth/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status == 200) {
          console.log("Coming Hoem");
          navigate("/home");
        } else {
          notifyInvalidCredentials();
        }
      })
      .catch(function (error) {
        notifyInvalidCredentials();
        console.log(error);
      });
  };

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <>
       <ToastContainer autoClose={2000} position="bottom-right" />
      <div className="font-pt text-white text-4xl drop-shadow-sm font-semibold">
        WELCOME TO BOOKBEE
      </div>
      <div className="font-pt text-ter text-2xl">Login to your account</div>
      <form className="w-full m-10 px-16">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-pt font-bold text-xl text-white">
              Email
            </span>
          </label>
          <input
            type="email"
            name="email"
            className="input-success input-lg font-pt h-14 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            className="input-success input-lg font-pt h-14 bg-prilight rounded-none text-white focus-within:outline-black focus-within:border-black focus:outline-none hover:border-black hover:border-2 focus:border-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-control mt-12 m-auto w-fit">
          {/* <Link to='/home'> */}
          <Button
            type="submit"
            text="Login"
            style="bg-sec text-white text-2xl font-medium w-fit h-20  px-20"
            onClickFunction={handleLogin}
          />
          {/* </Link> */}
        </div>
      </form>
      <div className="text-gray-400 font-pt text-xl">
        Don&#39;t have an account?
        <Link
          to="/signup"
          className="text-orange-700 px-2 font-bold drop-shadow-xl"
        >
          Create Account
        </Link>
      </div>
    </>
  );
}

export default LoginForm;
