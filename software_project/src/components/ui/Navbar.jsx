import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="h-14 grid grid-cols-6 font-pt  text-black border-x border-y bg-prilight border-black w-full my-2 shadow-md ">
      <Link to="" >
        <Button
          text="Home"
          style="h-full text-xl border-x border-black font-normal w-full"
        />
       </Link>
      <Link to="profile">
        <Button
          text="Profile"
          style="h-full text-xl border-x border-black font-normal w-full"
        />
      </Link>

      <Link to="addbook">
        <Button
          text="Add a Book"
          style="h-full text-xl border-x border-black font-normal w-full"
        />
      </Link>

      <Link to="findbook">
        <Button
          text="Find a Book"
          style="h-full text-xl border-x border-black font-normal w-full"
        />
      </Link>

      <Link to="messages">
        <Button
          text="Messages"
          style="h-full text-xl border-x border-black font-normal w-full"
        />
      </Link>

      <Link to="notifications">
        <Button
          text="Notifications"
          style="h-full text-xl border-x border-black font-normal w-full"
        />
      </Link>
    </ul>
  );
}

export default Navbar;
