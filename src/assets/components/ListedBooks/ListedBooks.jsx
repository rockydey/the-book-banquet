import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import {
  getStoredReadBook,
  getStoredWishlistBook,
} from "../../../utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  useEffect(() => {
    const storedReadBooksId = getStoredReadBook();
    const storedWishlistBooksId = getStoredWishlistBook();
    if (books.length > 0) {
      const booksRead = [];
      for (const id of storedReadBooksId) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          booksRead.push(book);
        }
      }
      setReadBooks(booksRead);

      const booksWishlist = [];
      for (const id of storedWishlistBooksId) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          booksWishlist.push(book);
        }
      }
      setWishlistBooks(booksWishlist);
    }
  }, []);

  const handleSort = (event) => {
    if (event.target.value === "1") {
      const result = [...readBooks].sort((a, b) => b.rating - a.rating);
      setReadBooks(result);
    }
    if (event.target.value === "2") {
      const result = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
      setReadBooks(result);
    }
    if (event.target.value === "3") {
      const result = [...readBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadBooks(result);
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <h3 className='text-3xl text-[#131313] font-bold work-sans text-center py-8 bg-[#1313130D] rounded-2xl my-9'>
        Books
      </h3>
      <div className='mt-8 mb-10 text-center'>
        <select
          defaultValue='Sort By'
          className='select text-[#FFFFFF] text-lg focus:outline-none work-sans font-medium bg-[#23BE0A] rounded-lg'
          onChange={handleSort}>
          <option disabled defaultValue='Sort By'>
            Sort By
          </option>
          <option value='1'>Rating</option>
          <option value='2'>Number of Pages</option>
          <option value='3'>Publish Year</option>
        </select>
      </div>
      <div role='tablist' className='tabs tabs-lifted'>
        <input
          type='radio'
          name='my_tabs_2'
          role='tab'
          className='tab text-[#13131380] focus:text-[#131313CC] work-sans text-lg font-normal'
          aria-label='Read Books'
          checked
          readOnly
        />
        <div
          role='tabpanel'
          className='tab-content bg-base-100 border-base-300 border-s-0 border-b-0 border-e-0 rounded-box py-6'>
          <div>
            {readBooks.map((readBook) => (
              <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>
            ))}
          </div>
        </div>

        <input
          type='radio'
          name='my_tabs_2'
          role='tab'
          className='tab text-[#13131380] focus:text-[#131313CC] work-sans text-lg font-normal'
          aria-label='Wishlist Books'
        />
        <div
          role='tabpanel'
          className='tab-content bg-base-100 border-base-300 border-s-0 border-b-0 border-e-0 rounded-box py-6'>
          <div>
            {wishlistBooks.map((wishlistBook) => (
              <ReadBook
                key={wishlistBook.bookId}
                readBook={wishlistBook}></ReadBook>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
