import axios from "axios";
import React, { useEffect, useState } from "react";
import RequestRows from "./RequestRows";
function Requests() {
	const [requests, setRequests] = useState([]);
	const fetchData = async () => {
		const res = await axios.get(
			`http://localhost:3000/book/getAllRequestByContributorId?contributorId=${localStorage.getItem(
				"userId"
			)}`
		);
		await setRequests(res.data.requests);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="overflow-x-auto w-full border-2 border-black rounded-sm bg-prilight">
			<table className="table text-white text-lg">
				{/* head */}
				<thead className="text-black text-xl text-center">
					<tr>
						<th>User Name</th>
						<th>Book</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{requests.map((request) => {
						return (
							<RequestRows
								key={request._id}
								request={request}
							></RequestRows>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Requests;
