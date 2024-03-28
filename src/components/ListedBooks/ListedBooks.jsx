import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import ReadBook from "../ReadBook/ReadBook";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredReadBook,
  getStoredWishlistBook,
} from "../../utility/localStorage";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sortName, setSortName] = useState("Sort By");
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
    setSortName("Sort By");
  }, []);

  const handleSort = (target) => {
    if (target === 1) {
      setSortName("Rating");
      const result1 = [...readBooks].sort((a, b) => b.rating - a.rating);
      setReadBooks(result1);

      const result2 = [...wishlistBooks].sort((a, b) => b.rating - a.rating);
      setWishlistBooks(result2);
    }
    if (target === 2) {
      setSortName("Number of Pages");
      const result1 = [...readBooks].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadBooks(result1);

      const result2 = [...wishlistBooks].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setWishlistBooks(result2);
    }
    if (target === 3) {
      setSortName("Publish Year");
      const result1 = [...readBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadBooks(result1);

      const result2 = [...wishlistBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setWishlistBooks(result2);
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <h3 className='text-3xl text-[#131313] font-bold work-sans text-center py-8 bg-[#1313130D] rounded-2xl my-9'>
        Books
      </h3>
      <div className='mt-8 mb-10 text-center'>
        <div className='dropdown dropdown-bottom flex flex-col items-center'>
          <div
            tabIndex={0}
            role='button'
            className='flex gap-3 items-center px-10 py-4 text-[#FFFFFF] text-lg focus:outline-none work-sans font-medium bg-[#23BE0A] rounded-lg'>
            <p>{sortName ? sortName : "Sort By"}</p>
            <IoIosArrowDropdown className='text-xl' />
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu shadow rounded-b-xl bg-white  md:bg-[#1313130D] text-[#131313CC] text-base font-medium w-44 space-y-2'>
            <li className='cursor-pointer' onClick={() => handleSort(1)}>
              Rating
            </li>
            <li className='cursor-pointer' onClick={() => handleSort(2)}>
              Number of Pages
            </li>
            <li className='cursor-pointer' onClick={() => handleSort(3)}>
              Publish Year
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <p className='text-[#131313] work-sans text-lg font-normal'>
              Read Books
            </p>
          </Tab>
          <Tab>
            <p className='text-[#131313] work-sans text-lg font-normal'>
              Wishlist Books
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            {readBooks.map((readBook) => (
              <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {wishlistBooks.map((wishlistBook) => (
              <ReadBook
                key={wishlistBook.bookId}
                readBook={wishlistBook}></ReadBook>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
