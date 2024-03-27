import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <section className='bg-[#1313130D] px-5 py-5  rounded-3xl mt-12 mb-24 text-center'>
        <div className='space-y-6 md:space-y-8 w-full'>
          <h1 className='playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#131313]'>
            Insightful Echoes: Your Portal to Wisdom
          </h1>
          <p className='text-lg font-normal work-sans w-full md:w-1/2 mx-auto'>
            Embark on a Journey of Discovery: Explore our blog, where insights
            thrive. Delve into diverse perspectives, uncovering wisdom and
            inspiration. Join the dialogue, as we navigate the realms of
            knowledge together.
          </p>
          <button className='bg-[#23BE0A] uppercase inline-block cursor-pointer px-7 py-4 rounded-lg border-0 text-white work-sans text-lg font-semibold'>
            Share Your Idea
          </button>
        </div>
      </section>
      <section className='my-20 p-5 lg:p-0'>
        <h2 className='work-sans text-2xl lg:text-3xl text-center font-bold text-[#131313] mb-10'>
          All Blogs
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
