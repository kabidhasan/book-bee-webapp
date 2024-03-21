import React from 'react'
import Button from './Button'

let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publication: "1988",
    genre: "Fiction",
    marketPrice: "₦2000",
    points: 100,
    language: "English",
    age: "10 months",
    condition: "Good",
    location: "Sylhet, Bangladesh",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"

}

function Book() {
  return (

        <div className='flex flex-col justify-center items-center'>
            <img src={book.imageUrl} alt={book.title} className='h-96 border border-black'/>
            <h2 className='font-pt text-white text-xl font-bold pt-2'>{book.title}</h2>
            <p className='font-play font-bold text-black text-xl'>Points: {book.points}</p>
            <Button text="View Details" style="bg-sec text-white"/>
        </div>
  )
}

export default Book