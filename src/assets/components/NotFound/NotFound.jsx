import Header from "../Header/Header";
import notFoundImg from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <div className='w-[54%] mx-auto'>
        <img className='w-full' src={notFoundImg} alt='404 Not Found' />
      </div>
    </div>
  );
};

export default NotFound;
