import Book from "../Book/Book";
import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <section>
      <h1 className='playfair text-[#131313] text-4xl font-bold text-center mb-10'>
        Books
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </section>
  );
};

export default Books;
