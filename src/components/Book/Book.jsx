import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, tags, bookName, author, image, category, rating } = book;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/book/${bookId}`)}
      className='card p-6 rounded-2xl border border-[#13131326] cursor-pointer'>
      <div className='bg-[#F3F3F3] rounded-2xl flex justify-center px-24 py-8'>
        <img src={image} className="h-[166px]" alt='book image' />
      </div>
      <div className='card-body px-0'>
        <div className='flex gap-3 mt-6'>
          {tags.map((tag, idx) => (
            <p
              className='work-sans text-base font-medium text-[#23BE0A] px-4 py-2 bg-[#23BE0A0D] rounded-full'
              key={idx}>
              {tag}
            </p>
          ))}
        </div>
        <h3 className='playfair text-[#131313] text-2xl font-bold mt-4'>
          {bookName}
        </h3>
        <p className='work-sans text-[#131313CC] text-base font-medium mt-4 mb-5'>
          By: {author}
        </p>
      </div>
      <div className='justify-end'>
        <div className='border border-dashed border-[#13131326]'></div>
        <div className='mt-5 flex justify-between items-center'>
          <p className='text-[#131313CC] text-base font-medium'>{category}</p>
          <div className='flex items-center gap-2 text-[#131313CC] text-base font-medium'>
            <p>{rating}</p>
            <p className=''>
              <CiStar className='text-[#131313CC] text-lg' />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
