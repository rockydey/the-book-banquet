import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section className='bg-[#1313130D] flex gap-6 md:gap-0 flex-col-reverse px-5 py-5 md:flex-row md:px-14 md:py-10 lg:px-28 lg:py-20 items-center justify-between rounded-3xl mt-12 mb-24'>
      <div className='space-y-6 md:space-y-12 w-full'>
        <h1 className='playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#131313]'>
          Where every page <span className='inline lg:block lg:mb-4'></span> is
          a new Adventure
        </h1>
        <Link
          to='/listed-books'
          className='bg-[#23BE0A] inline-block cursor-pointer px-7 py-4 rounded-lg border-0 text-white work-sans text-lg font-semibold'>
          View The List
        </Link>
      </div>
      <div className=''>
        <img className='' src={bannerImg} alt='Book Image' />
      </div>
    </section>
  );
};

export default Banner;
