import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import RequestRows from "./RequestRows"

export const RenderContext = createContext(null)
function Requests() {
  const [requests, setRequests] = useState([]);
  const [render, setRender] = useState(false);
  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:3000/book/getAllRequestByContributorId?contributorId=${localStorage.getItem(
        "userId"
      )}`
      );
      await setRequests(res.data.requests)
      
  };
  useEffect(() => {fetchData()}, [render]);
  return (
    <div className="overflow-x-auto w-full border border-black rounded-sm ">
      <table className="table text-white text-lg">
        {/* head */}
        <thead className="text-orange-400  text-xl text-center">
          <tr>
            <th>User Name</th>
            <th>Book</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <RenderContext.Provider value={{render, setRender}}>
            {requests.map((request) => {
              return (
                <RequestRows key={request._id} request={request}></RequestRows>
              );
            })}
          </RenderContext.Provider>
        </tbody>
      </table>
    </div>
  );
}

export default Requests;
