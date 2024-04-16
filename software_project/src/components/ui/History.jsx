import axios from "axios";
import { createContext, useEffect, useState } from "react";
import HistoryRows from "./HistoryRows";

export const RenderContext = createContext(null)
function History() {
	const [responses, setResponses] = useState([]);
	const [render, setRender] = useState(false)
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
	}, [render]);

	return (
    <>
      <div className="overflow-x-auto w-full border-2 border-black rounded-sm bg-prilight ">
        <table className="table text-white text-lg">
          {/* head */}
          <thead className="text-black  text-xl text-center">
            <tr>
              <th>Contributor Name</th>
              <th>Book</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <RenderContext.Provider value={{ render, setRender }}>
              {responses.map((response) => {
                return (
                  <HistoryRows key={response} request={response}></HistoryRows>
                );
              })}
            </RenderContext.Provider>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default History;
