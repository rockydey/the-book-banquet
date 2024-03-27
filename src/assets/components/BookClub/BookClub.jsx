import { Link } from "react-router-dom";
import Header from "../Header/Header";
import bookClubImg from "../../images/join-forum.png";
import discussionImg from "../../images/book-club.jpg";

const BookClub = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <section className='bg-[#1313130D] flex gap-6 md:gap-0 flex-col-reverse px-5 py-5 lg:flex-row md:px-14 md:py-10 lg:px-28 lg:py-20 items-center justify-between rounded-3xl mt-12 mb-24'>
        <div className='space-y-6 md:space-y-12 w-full'>
          <h1 className='playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#131313]'>
            Literary Explorers <span className='inline lg:block lg:mb-4'></span>{" "}
            Book Club
          </h1>
          <p className='text-lg font-normal work-sans'>
            Explore captivating reads with us! Join our book club for engaging
            discussions and literary adventures. Connect with fellow readers and
            dive into a world of stories. Join now and let the adventure begin!
          </p>
          <Link
            to='/'
            className='bg-[#23BE0A] uppercase inline-block cursor-pointer px-7 py-4 rounded-lg border-0 text-white work-sans text-lg font-semibold'>
            Join The Club
          </Link>
        </div>
        <div className=''>
          <img className='' src={bookClubImg} alt='Book Image' />
        </div>
      </section>
      <section className='my-20 p-5 lg:p-0'>
        <h1 className='text-center text-4xl font-bold playfair mb-10 text-[#131313]'>
          Discussion Forums
        </h1>
        <div className='flex gap-6 flex-col lg:flex-row lg:items-center'>
          <div className='lg:w-1/2'>
            <img className='w-full' src={discussionImg} alt='' />
          </div>
          <div className='space-y-7 lg:w-1/2'>
            <h4 className='playfair text-2xl lg:text-3xl font-bold text-[#131313]'>
              Explore Engaging Discussions in our Forums
            </h4>
            <p className='text-lg font-normal work-sans'>
              Engage in lively discussions! Join our vibrant online forums to
              share thoughts, insights, and questions about your favorite books.
              Connect with fellow readers, exchange ideas, and explore diverse
              perspectives.
            </p>
            <button className='bg-[#59C6D2] uppercase inline-block cursor-pointer px-7 py-4 rounded-lg border-0 text-white work-sans text-lg font-semibold'>
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookClub;
