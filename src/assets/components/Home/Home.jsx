import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <Banner />
      <Books />
      <Outlet />
    </div>
  );
};

export default Home;
