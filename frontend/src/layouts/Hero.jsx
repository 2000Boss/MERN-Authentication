const Hero = () => {
  return (
    <>
      <section class="text-gray-600 body-font  bg-slate-900">
        <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div class="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
            <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3  text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
              Meroon
            </h1>
            <p class="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed text-gray-300">
              Your number one source for all Django related news, tutorials and
              information. We're dedicated to providing you with the very best
              content, with an emphasis on community standards.
            </p>
            <div class="flex justify-center">
              <a
                href="#_"
                class="relative rounded-full px-5 py-2.5 overflow-hidden group bg-emerald-600  hover:bg-gradient-to-r hover:from-green-600 hover:to-green-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-600 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="text-lg relative">Subscribe</span>
              </a>
              <a
                href="#_"
                class="ml-4  items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-700 whitespace-no-wrap bg-gray-100 border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none duration-100"
              >
                Sign Up
              </a>
            </div>
          </div>
          <img src="./Blogging.svg" alt="" className="w-6/12 -mr-80" />
          <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6"></div>
        </div>
      </section>
      <section class="bg-slate-900 -mt-32">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1e293b "
            fill-opacity="1"
            d="M0,192L40,202.7C80,213,160,235,240,213.3C320,192,400,128,480,133.3C560,139,640,213,720,240C800,267,880,245,960,224C1040,203,1120,181,1200,176C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Hero;
