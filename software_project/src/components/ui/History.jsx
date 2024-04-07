import axios from "axios";
import { useEffect, useState } from "react";
import HistoryRows from "./HistoryRows";

function History() {
	const [responses, setResponses] = useState([]);
	const fetchData = async () => {
		axios
			.get(
				`http://localhost:3000/book/getAllRequestByBenificiaryId?userId=${localStorage.getItem(
					"userId"
				)}`
			)
			.then((res) => setResponses(res.data.requests));
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className="overflow-x-auto w-full border border-black rounded-sm ">
				<table className="table text-white text-lg">
					{/* head */}
					<thead className="text-orange-400  text-xl text-center">
						<tr>
							<th>Contributor Name</th>
							<th>Book</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{responses.map((response) => {
							return (
								<HistoryRows
									key={response}
									request={response}
								></HistoryRows>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default History;
