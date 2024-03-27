import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, author, date, category, tags, content } = blog;
  return (
    <div className='card p-6 rounded-2xl border border-[#13131326]'>
      <div>
        <h3 className='playfair text-[#131313] text-2xl font-bold mt-4'>
          {title}
        </h3>
        <p className='work-sans text-[#131313CC] text-base font-medium mt-4 mb-5'>
          By: {author}
        </p>
        <div className='flex gap-3'>
          {tags.map((tag, idx) => (
            <p
              className='work-sans text-base font-medium text-[#23BE0A] px-4 py-2 bg-[#23BE0A0D] rounded-full'
              key={idx}>
              {tag}
            </p>
          ))}
        </div>
        <div className='border border-dashed border-[#13131326] my-4'></div>
      </div>
      <div className='card-body px-0 py-0'>
        <p className=' work-sans text-base font-normal text-[#131313B3]'>
          {content} <span className='font-bold'>...</span>{" "}
          <span className='cursor-pointer font-bold text-lg underline text-[#0039b8]'>
            See More
          </span>
        </p>
      </div>
      <div className='justify-end'>
        <div className='border border-dashed border-[#13131326] my-4'></div>
        <div className='flex justify-between'>
          <p className='text-[#131313CC] text-base font-medium'>
            Publish Date: {date}
          </p>
          <p className='text-[#131313CC] text-base font-medium'>
            Category: {category}
          </p>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
