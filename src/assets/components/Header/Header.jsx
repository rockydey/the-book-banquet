import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/listed-books'>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to='/pages-read'>Pages To Read</NavLink>
      </li>
    </>
  );

  return (
    <div className='navbar bg-base-100 px-0 flex-col md:flex-row space-y-3 md:space-y-0'>
      <div className='navbar-start w-full md:w-1/2 lg:w-1/3 justify-center md:justify-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='work-sans text-[#131313CC] text-lg font-normal menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            {links}
          </ul>
        </div>
        <Link to='/' className='work-sans text-[#131313] text-3xl font-bold'>
          The Book Banquet
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex link-active'>
        <ul className='menu menu-horizontal px-1 space-x-4 work-sans text-[#131313CC] text-lg font-normal'>
          {links}
        </ul>
      </div>
      <div className='navbar-end space-x-4 w-full md:w-1/2 lg:w-1/3 justify-center md:justify-end'>
        <a className='bg-[#23BE0A] cursor-pointer px-7 py-4 rounded-lg border-0 text-white work-sans text-lg font-semibold'>
          Sign In
        </a>
        <a className='bg-[#59C6D2] cursor-pointer px-7 py-4 rounded-lg border-0 text-white work-sans text-lg font-semibold'>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
