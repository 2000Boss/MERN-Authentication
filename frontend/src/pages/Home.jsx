import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Content from "../layouts/Content";

const Home = () => {
  return (
    <div className=" bg-slate-800 text-gray-300">
      <Navbar />
      <Content />

      <Footer />
    </div>
  );
};

export default Home;
