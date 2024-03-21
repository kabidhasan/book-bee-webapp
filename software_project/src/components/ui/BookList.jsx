import React from 'react'
import Book from './Book'

function BookList() {
return (
    <div className="grid grid-cols-3 gap-6 ">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </div>
);
}

export default BookList