import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReadBook = ({ readBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    publisher,
    totalPages,
    tags,
    yearOfPublishing,
    category,
    rating,
  } = readBook;
  return (
    <section className='flex flex-col lg:flex-row items-center gap-6 p-6 border-2 mb-6 rounded-2xl'>
      <div className='py-7 px-12 bg-[#1313130D] rounded-2xl'>
        <img src={image} alt={bookName} />
      </div>
      <div className='flex-grow'>
        <h3 className='playfair text-2xl font-bold text-[#131313] mb-4'>
          {bookName}
        </h3>
        <p className='text-[#131313CC] work-sans text-base font-medium mb-4'>
          By: {author}
        </p>
        <div className='flex flex-col md:flex-row gap-5 md:items-center mb-4'>
          <div className='flex items-center gap-4'>
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
          <div className='flex items-center gap-3'>
            <CiLocationOn className='text-lg' />
            <p className='work-sans text-base font-normal text-[#131313CC]'>
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-3 work-sans text-base font-normal'>
            <IoPeopleOutline className='text-lg text-[#13131399]' />
            <p className='text-[#13131399]'>Publisher: {publisher}</p>
          </div>
          <div className='flex items-center gap-3 work-sans text-base font-normal'>
            <FaRegFileAlt className='text-lg text-[#13131399]' />
            <p className='text-[#13131399]'>Page {totalPages}</p>
          </div>
        </div>
        <div className='border border-solid my-4'></div>
        <div className='flex flex-col md:flex-row md:items-center text-center md:text-right gap-3'>
          <p className='text-[#328EFF] text-base work-sans font-normal px-5 py-3 bg-[#328EFF26] rounded-full'>
            Category: {category}
          </p>
          <p className='text-[#FFAC33] text-base work-sans font-normal px-5 py-3 bg-[#FFAC3326] rounded-full'>
            Rating: {rating}
          </p>
          <Link
            to={`/book/${bookId}`}
            className='text-[#FFFFFF] text-lg work-sans font-medium px-5 py-3 bg-[#23BE0A] rounded-full'>
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
};

ReadBook.propTypes = {
  readBook: PropTypes.object.isRequired,
};

export default ReadBook;
