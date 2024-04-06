import { Link } from "react-router-dom";
import Button from "/src/components/ui/Button";
import { useNavigate } from "react-router-dom";
function DashHeader() {
	const navigate = useNavigate();
	const handleLogOut = () => {
		console.log("logout hit");
		localStorage.removeItem("userId");
		navigate("/");
	}
	return (
    <div className="flex justify-between items-center bg-gradient-to-t from-pri to-pri pt-4 h-20">
      <div className="">
        <Link
          to="/"
          className="btn btn-ghost font-pt text-2xl text-white font-normal hover:text-orange-600 hover:cursor-pointer hover:drop-shadow-2xl"
        >
          <img src="/book.png" className="h-12 pb-2" />
          Book Bee
        </Link>
      </div>
      <ul className="flex gap-5 justify-center items-center">
        <li>
          <Button
            text="Logout"
            style="px-8 bg-sec text-ter font-bold"
            onClickFunction={handleLogOut}
          />
        </li>
        <li>
          <Link to="profile">
            <Button
              text="Profile"
							style="px-8 border-2 border-sec text-ter bg-sec font-bold"
							
            />
          </Link>
        </li>
        {/* <li>
					<Link
						to='/aboutus'
						className='btn btn-ghost text-xl text-white  hover:text-yellow-300'
					>
						About Us
					</Link>
				</li> */}
      </ul>
    </div>
  );
}

export default DashHeader;
