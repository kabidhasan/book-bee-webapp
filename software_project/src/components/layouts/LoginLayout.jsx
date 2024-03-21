import LoginForm from "../ui/LoginForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginLayout() {
	const notifyInvalidCredentials = () => {
		console.log("notify")
		toast.error("Invalid Credentials")
	}
	return (
    <div className="h-dvh w-dvw flex justify-evenly items-center bg-pri">
      <ToastContainer autoClose={2000} position="bottom-right" />
      <img src="/login.svg" className=" w-1/3" />
      <div className="flex flex-col justify-between items-center w-1/3">
        <LoginForm notifyInvalidCredentials={notifyInvalidCredentials} />
      </div>
    </div>
  );
}

export default LoginLayout;
