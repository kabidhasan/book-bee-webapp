import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';

let book = {"_id":"65febe5f047d5ce2932c9298","name":"Jibon O Rajnoitik Bastobota","image":"https://firebasestorage.googleapis.com/v0/b/book-bee-webapp-8708a.appspot.com/o/images%2F7b614cd3-f344-4b70-9b76-75da64a80eae.png?alt=media&token=610eaae1-619a-423a-b0c5-2d3e1d7b96e3","author":"Shahidul Zahir","publication":"Hakkani Publishers","genre":"Novel Political","language":"Bangla","price":"150","age":"60","condition":"A bit teared"};

function RequestBook() {
  return (
    <div className='border border-black w-full flex rounded-sm p-4'>
        <div className='flex w-1/2 flex-col justify-start items-center'>
            <img src={book.image} alt={book.name} className='h-96 border border-black' />
            <h1 className='font-pt h-24  text-center text-white text-xl font-bold pt-2'>{book.name}</h1>
            <p className='font-play font-bold border-black border-2 p-2 text-black text-xl'>Points: {book.price}</p>
        </div>
        <div className='flex w-1/2 flex-col justify-start items-center'>
            <h1 className='font-pt  text-center text-white text-xl font-bold pt-2 pb-6'>Book Details</h1>
            <p className='font-play font-bold text-black text-xl'>Author: {book.author}</p>
            <p className='font-play font-bold text-black text-xl'>Publication: {book.publication}</p>
            <p className='font-play font-bold text-black text-xl'>Genre: {book.genre}</p>
            <p className='font-play font-bold text-black text-xl'>Language: {book.language}</p>
            <p className='font-play font-bold text-black text-xl'>Age: {book.age}</p>
            <p className='font-play font-bold text-black text-xl '>Condition: {book.condition}</p>

            <Button text="Request Book" style="bg-sec text-white self-center mt-auto" />
            <Link to={`/report/${book._id}`}> 
              <div className='hover:text-red-300 font-bold font-play text-lg text-white p-5'> Report Fake Book</div>
            </Link>
        </div>
        
    </div>
  )
}

export default RequestBook