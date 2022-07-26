import Cards from "./Cards";
import Hero from "./Hero";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <div className="bg-slate-800 text-gray-300 content overflow-hidden">
      <Hero />
      <section className="body-font container mx-auto  bg-slate-800 -mt-16 flex flex-row gap-x-20">
        <Cards />
        <Sidebar />
      </section>
    </div>
  );
};

export default Content;
