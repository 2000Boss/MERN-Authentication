import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Request from "../services/Axios-CRUD";

import { deleteUser } from "../StoreConfig/features/UserSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [getToggle, setToggle] = useState(false);
  // const { userInfo, userToken } = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (userToken) {
  //     dispatch(getUserDetails());
  //   }
  // });

  const Logout = () => {
    dispatch(deleteUser());
    Request.logout();
    Cookies.remove("logged_in");
    navigate("/signin", { replace: true });
  };

  return (
    <div className="w-full sticky top-0 z-50   text-gray-200 bg-slate-900">
      <div className="flex flex-col max-w-screen-xl  px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between pl-0 -ml-4">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-1 bg-emerald-600 rounded-full"
              viewBox="0 0 24 24"
              data-darkreader-inline-stroke=""
              style={{ darkreaderInlineStroke: "currentColor" }}
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                data-darkreader-inline-stroke=""
                style={{ darkreaderInlineStroke: "none" }}
              ></path>
              <circle cx="12" cy="12" r="1"></circle>
              <path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792"></path>
              <path d="M3 12a9 9 0 1 0 9 -9"></path>
            </svg>
            <span className="ml-3 font-bold text-xl text-gray-100">Meroon</span>
          </Link>

          <button
            aria-label="mobile-menu"
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-6 h-6"
              data-darkreader-inline-fill=""
              style={{ darkreaderInlineStroke: "currentColor" }}
            >
              <path
                x-show="!open"
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                x-show="open"
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                style={{ display: "none" }}
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex-col  flex-grow  items-center pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row -mr-4">
          <a className="md:mt-0 mt-3 px-3 py-2" href="/articles/">
            Category
          </a>

          <a className="md:mt-0 mt-3 px-3 py-2" href="/books/all/">
            Books
          </a>
          <Link className="md:mt-0 mt-3 px-3 py-2" to="/pricing">
            Pricing
          </Link>
          {/* <Link className="md:mt-0 mt-3 px-3 py-2" to="/profile">
            Profile
          </Link> */}
          <div className="flex flex-col  absolute justify-center">
            <img
              id="avatarButton"
              type="button"
              onClick={() => setToggle(!getToggle)}
              data-dropdown-toggle="userDropdown"
              data-dropdown-placement="bottom-start"
              className="w-10 h-10 ml-28 rounded-full raletive cursor-pointer"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="User dropdown"
            />

            {getToggle && (
              <div
                id="userDropdown"
                className="z-10 w-44 mt-14  bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 "
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom-start"
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                }}
              >
                <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div>
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1 mx-full">
                  {props.Signup ? (
                    <Link
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      to="/signin"
                    >
                      Log in
                    </Link>
                  ) : props.Signin ? (
                    <Link
                      className=" block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  ) : Cookies.get("logged_in") ? (
                    <button
                      className="  py-2 px-16  text-sm text-left text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={Logout}
                    >
                      Log out
                    </button>
                  ) : (
                    <Link
                      className=" block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      to="/signin"
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mr-14"></div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
