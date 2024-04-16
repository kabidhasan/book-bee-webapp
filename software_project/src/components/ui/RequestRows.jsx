import axios from "axios";
import { useEffect, useState } from "react";

const RequestRows = ({ request }) => {
	const { bookId, benificiary } = request;
	console.log(benificiary);
	const [benificiaryObj, setBenificiaryObj] = useState({});
	const [book, setBook] = useState({});
	const fetchData = async () => {
		axios
			.get(`http://localhost:3000/user/getUserByUserId/${benificiary}`)
			.then((res) => setBenificiaryObj(res.data));
		axios
			.get(`http://localhost:3000/book/getBookById/${bookId}`)
			.then((res) => setBook(res.data.book));
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<tr>
			<td>
				<div className="flex items-center gap-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img
								src={book.image}
								alt="Avatar Tailwind CSS Component"
							/>
						</div>
					</div>
					<div>
						<div className="font-bold">{benificiaryObj.name}</div>
						<div className="text-sm opacity-50">United States</div>
					</div>
				</div>
			</td>
			<td>
				{book.name}
				<br />
				<span className="badge badge-ghost badge-sm">
					{book.author}
				</span>
			</td>
			<th className="flex h-20 justify-center items-center gap-6">
				<button className="btn btn-success btn-xs border border-black">
					RESPOND
				</button>
				<button className="btn btn-error btn-xs border border-black">
					IGNORE
				</button>
			</th>
		</tr>
	);
};

export default RequestRows;
