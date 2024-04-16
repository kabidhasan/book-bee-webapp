import axios from "axios";
import { useEffect, useState } from "react";
import HistoryAction from "./HistoryAction";

const HistoryRows = ({ request }) => {
    console.log(request);
    const { benificiary, contributor, bookId } = request;
    const [book,setBook] = useState({})
    const [contributorObj,setContributorObj] = useState({})
    const fetchData = async () => {
        axios.get(`http://localhost:3000/user/getUserByUserId/${contributor}`).then(res=>setContributorObj(res.data))
        axios.get(`http://localhost:3000/book/getBookById/${bookId}`).then(res=>setBook(res.data.book))
    }
    useEffect(() => {
        fetchData()
        
    },[request])
    return (
      
        <tr>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={book.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{contributorObj.name}</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            {book.name}
            <br />
            <span className="badge badge-ghost badge-sm h-fit">{book.author}</span>
          </td>
          <th className="flex h-20 justify-center items-center gap-6">
            <HistoryAction request={request}></HistoryAction>
          </th>
        </tr>
      
    );
};

export default HistoryRows;