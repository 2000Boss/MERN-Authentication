import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Request from "../services/Axios-CRUD";
// import Spinner from "../components/Spinner";

import { deleteUser } from "../StoreConfig/features/UserSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div class="w-full sticky top-0 z-50  text-gray-200 bg-slate-900">
      <div class="flex flex-col max-w-screen-xl  px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div class="p-4 flex flex-row items-center justify-between pl-0 -ml-4">
          <Link
            to="/"
            class="flex title-font font-medium items-center text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-1 bg-emerald-600 rounded-full"
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
            <span class="ml-3 font-bold text-xl text-gray-100">Meroon</span>
          </Link>

          <button
            aria-label="mobile-menu"
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="w-6 h-6"
              data-darkreader-inline-fill=""
              style={{ darkreaderInlineStroke: "currentColor" }}
            >
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                style={{ display: "none" }}
              ></path>
            </svg>
          </button>
        </div>
        <nav class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row -mr-4">
          <a class="md:mt-0 mt-3 px-3 py-2" href="/articles/">
            Category
          </a>

          <a class="md:mt-0 mt-3 px-3 py-2" href="/books/all/">
            Books
          </a>
          <Link class="md:mt-0 mt-3 px-3 py-2" to="/pricing">
            Pricing
          </Link>
          <Link class="md:mt-0 mt-3 px-3 py-2" to="/profile">
            Profile
          </Link>
          {props.Signup ? (
            <Link
              class="md:mt-0 mt-3 px-3 py-1 ml-2  items-center justify-center text-base leading-6 text-gray-700 whitespace-no-wrap bg-gray-100 border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none duration-100"
              to="/signin"
            >
              Sign In
            </Link>
          ) : props.Signin ? (
            <Link
              class="md:mt-0 mt-3 px-3 py-1 ml-2  items-center justify-center text-base leading-6 text-gray-700 whitespace-no-wrap bg-gray-100 border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none duration-100"
              to="/signup"
            >
              Sign Up
            </Link>
          ) : Cookies.get("logged_in") ? (
            <button
              class="md:mt-0 mt-3 px-3 py-1 ml-2  items-center justify-center text-base leading-6 text-gray-700 whitespace-no-wrap bg-gray-100 border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none duration-100"
              onClick={Logout}
            >
              Log out
            </button>
          ) : (
            <Link
              class="md:mt-0 mt-3 px-3 py-1 ml-2  items-center justify-center text-base leading-6 text-gray-700 whitespace-no-wrap bg-gray-100 border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none duration-100"
              to="/signin"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
