import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBook, saveWishlistBook } from "../../../utility/localStorage";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const parseId = parseInt(bookId);
  const bookDetail = books.find((book) => book.bookId === parseId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = bookDetail;

  const handleReadBook = () => {
    saveReadBook(parseId);
  };

  const handleWishlistBook = () => {
    saveWishlistBook(parseId);
  };

  return (
    <section className='max-w-screen-xl mx-auto'>
      <Header />
      <div className='flex flex-col lg:flex-row gap-12 mt-16 justify-center items-center px-5'>
        <div className='p-20 bg-[#1313130D] rounded-2xl lg:w-[45%]'>
          <img className='lg:w-full' src={image} alt={bookName} />
        </div>
        <div>
          <h2 className='playfair font-bold text-4xl text-[#131313] mb-5'>
            {bookName}
          </h2>
          <p className='text-[#131313CC] work-sans text-xl font-medium mb-5'>
            By: {author}
          </p>
          <div className='border border-solid border-[#13131326]'></div>
          <p className='text-[#131313CC] work-sans text-xl font-medium my-4'>
            {category}
          </p>
          <div className='border border-solid border-[#13131326]'></div>
          <p className='work-sans text-base font-normal text-[#131313B3] mt-5'>
            <span className='font-bold text-[#131313]'>Review:</span> {review}
          </p>
          <div className='flex items-center gap-4 mt-8 mb-6'>
            <span className='text-[#131313] work-sans text-base font-bold'>
              Tag
            </span>
            <div className='flex gap-3'>
              {tags.map((tag, idx) => (
                <p
                  className='work-sans text-base font-medium text-[#23BE0A] px-4 py-2 bg-[#23BE0A0D] rounded-full'
                  key={idx}>
                  #{tag}
                </p>
              ))}
            </div>
          </div>
          <div className='border border-solid border-[#13131326]'></div>
          <div className='mt-6 grid grid-cols-2 gap-y-3 w-1/2'>
            <p className='text-[#131313B3] work-sans text-base font-normal'>
              Number of Pages:{" "}
            </p>
            <p className='text-[#131313] work-sans text-base font-semibold'>
              {totalPages}
            </p>
            <p className='text-[#131313B3] work-sans text-base font-normal'>
              Publisher::{" "}
            </p>
            <p className='text-[#131313] work-sans text-base font-semibold'>
              {publisher}
            </p>
            <p className='text-[#131313B3] work-sans text-base font-normal'>
              Year of Publishing:{" "}
            </p>
            <p className='text-[#131313] work-sans text-base font-semibold'>
              {yearOfPublishing}
            </p>
            <p className='text-[#131313B3] work-sans text-base font-normal'>
              Rating::{" "}
            </p>
            <p className='text-[#131313] work-sans text-base font-semibold'>
              {rating}
            </p>
          </div>
          <div className='mt-8 space-x-4'>
            <a
              onClick={handleReadBook}
              className='border-2 border-[#1313134D] cursor-pointer px-7 py-4 rounded-lg text-[#131313] work-sans text-lg font-semibold'>
              Read
            </a>
            <a
              onClick={handleWishlistBook}
              className='bg-[#59C6D2] border-2 br cursor-pointer px-7 py-4 rounded-lg border-[#59C6D2] text-white work-sans text-lg font-semibold'>
              Wishlist
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default BookDetails;
