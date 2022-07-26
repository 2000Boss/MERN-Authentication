import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-slate-800 -mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0f172a"
            fillOpacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,186.7C672,160,768,128,864,144C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <footer className="text-gray-600 body-font bg-slate-900">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-wrap md:text-left order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-gray-100 text-lg mb-3">
                Resources
              </h2>
              <ul className="list-none mb-10">
                <li className="my-2">
                  <Link to="/" className="text-gray-300 hover:text-gray-100">
                    Sitemap
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/">RSS feed</Link>
                </li>
                <li className="my-2">
                  <Link to="/" className="text-gray-300 hover:text-gray-100">
                    Feature request
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/profile"
                    className="text-gray-300 hover:text-gray-100"
                  >
                    Report bug
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-gray-100 text-lg mb-3">
                Pages
              </h2>
              <ul className="list-none mb-10">
                <li className="my-2">
                  <Link to="/" className="text-gray-300 hover:text-gray-100">
                    About us
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/" className="text-gray-300 hover:text-gray-100">
                    Contact us
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/" className="text-gray-300 hover:text-gray-100">
                    Privacy policy
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/" className="text-gray-300 hover:text-gray-100">
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-gray-100 text-lg mb-3">
                Explore
              </h2>
              <ul className="list-none mb-10">
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    Articles
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    MadewithMeroon
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    Books
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    Courses
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    Notepad
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-gray-100 text-lg mb-3">
                MadewithMeroon
              </h2>
              <ul className="list-none mb-10">
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    Submit a project
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    Social Media
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    Open Source projects
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    Edtech
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-gray-300 hover:text-gray-100" to="/">
                    Fintech
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 items-center ml-48 justify-center">
          <div
            x-data="{ year: new Date().getFullYear() }"
            className="container px-5 py-6 lg:mx-auto flex items-center sm:flex-row flex-col"
          >
            <p
              aria-label="copyright"
              className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4"
            >
              © <span x-text="year">2022</span> —
            </p>
            <p className="text-gray-400 ml-1" target="_blank">
              Merooncentral |
              <span className="text-xs">
                Merooncentral is not associated with the DSF | Meroon is a
                registered trademark of the Meroon Software Foundation
              </span>
            </p>
            <p></p>
          </div>
        </div>
        <div className="fixed flex-col hidden gap-3 pl-0 ml-0 right-8 bottom-8 md:flex">
          <button
            x-data=""
            aria-label="Scroll To Top"
            type="button"
            className="p-2 transition-all rounded-full text-gray-400 bg-slate-700 hover:bg-gray-600"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-darkreader-inline-fill=""
              style={{ darkreaderInlineFill: "currentColor" }}
            >
              <path
                fillRule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
