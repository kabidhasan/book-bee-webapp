import { useEffect, useState } from "react";
import Book from "./Book";
import axios from "axios";

function BookList() {
	const [bookList, setBookList] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/book/getAllBooks")
			.then((res) =>
				setBookList(
					res.data.books.filter(
						(book) =>
							book.contributor != localStorage.getItem("userId")
					)
				)
			);
	}, []);

	return (
		<div className="flex flex-col justify-center items-center">
			<input
				type="text"
				placeholder="Search..."
				className="w-full mb-5 h-10 bg-ter rounded-none text-black border-2 px-5 border-black"
			/>

			<div className="grid grid-cols-3 gap-6 border-2 border-black p-5 rounded-sm bg-prilight">
				{bookList.map((book) => (
					<Book key={book.id} book={book}></Book>
				))}
			</div>
		</div>
	);
}

export default BookList;
