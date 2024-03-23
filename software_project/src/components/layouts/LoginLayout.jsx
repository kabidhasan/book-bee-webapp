import LoginForm from "../ui/LoginForm";

function LoginLayout() {
  return (
    <div className="h-dvh w-dvw flex justify-evenly items-center bg-pri">
      <img src="/login.svg" className=" w-1/3" />
      <div className="flex flex-col justify-between items-center w-1/3">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginLayout;
