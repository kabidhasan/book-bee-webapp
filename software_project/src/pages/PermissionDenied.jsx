import Footer from "./Footer";
import Header from "./Header";

const PermissionDenied = () => {
  return (
    <>
      <Header></Header>
      <div className="py-4 w-fit mx-auto ">
        <img
          src="/permission_denied.jpg"
          alt=""
          className="h-[400px] rounded-full shadow-2xl"
        />
      </div>
      <Footer></Footer>
    </>
  );
};

export default PermissionDenied;
