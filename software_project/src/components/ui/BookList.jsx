import React, { useEffect, useState } from "react";
import Book from "./Book";
import axios from "axios";

function BookList() {
    const [bookList, setBookList] = useState([])
    
  useEffect(() => {
    axios
      .get("http://20.244.96.143:3000/book/getAllBooks")
      .then((res) => setBookList(res.data.books));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 ">
      {bookList.map((book) => (
        <Book book={book}></Book>
      ))}
    </div>
  );
}

export default BookList;
