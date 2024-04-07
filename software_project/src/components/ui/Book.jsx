import Button from "./Button";
import { Link } from "react-router-dom";

function Book({ book }) {
	return (
		<div className="flex flex-col justify-center items-center">
			<img
				src={book.image}
				alt={book.name}
				className="h-96 border border-black"
			/>
			<h2 className="font-pt h-24  text-center text-white text-xl font-bold pt-2">
				{book.name}
			</h2>
			<p className="font-play font-bold text-black text-xl">
				Points: {book.price}
			</p>
			<Link to={`/home/viewbook/${book._id}`}>
				<Button text="View Details" style="bg-sec text-white" />
			</Link>
		</div>
	);
}

export default Book;
