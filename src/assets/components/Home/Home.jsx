import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
