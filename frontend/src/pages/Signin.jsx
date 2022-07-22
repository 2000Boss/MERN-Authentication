import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Spinner from "../components/Spinner";
import SigninSvg from "../static/SigninSvg";
import Request from "../services/Axios-CRUD";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../StoreConfig/features/UserSlice";
import Cookies from "js-cookie";
import { useState } from "react";
import Error from "../layouts/Error";

const Signin = () => {
  const [getLoad, setLoad] = useState(false);
  const [getError, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [getSignin, setSignin] = useState({ email: "", password: "" });

  const handleInput = (event) => {
    setSignin((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);
    Request.login(getSignin)
      .then((res) => {
        Cookies.set("logged_in", "yes", {
          secure: true,
          expires: new Date(res.data.data.expires),
        });
        dispatch(
          updateUser({
            email: res.data.data.user.email,
            firstName: res.data.data.user.firstName,
            lastName: res.data.data.user.lastName,
            _id: res.data.data.user._id,
          })
        );

        res.data.status === "success" &&
          (location.state?.from
            ? navigate(location.state.from)
            : navigate("/"));
        setLoad(false);
      })
      .catch((error) => {
        setError(error.response.data.msg);
        setLoad(false);
      });
  };
  return (
    <div className={getLoad && "relative z-10"}>
      <div class="dark:bg-slate-800">
        <Navbar Signin={true} />
        {<Error setError={setError}>{getError}</Error>}
        <section class="text-gray-600 bg-slate-800">
          <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 flex flex-col content-start pt-4 text-center">
              <form
                class="text-base font-[450] h-full w-full"
                onSubmit={handleSubmit}
              >
                <div class="mx-44">
                  <div>
                    <div class="mb-6 space-y-4">
                      <h1 class="font-medium text-4xl text-emerald-600">
                        <p>Sign In</p>
                      </h1>
                      <div class="space-x-8 flex items-center justify-center">
                        <a
                          href="/"
                          class="w-8 h-8 bg-gray-200 hover:bg-emerald-600 hover:text-gray-100 font-extrabold rounded-full flex flex-row justify-center items-center border border-black"
                        >
                          f
                        </a>
                        <a
                          href="/"
                          class="w-8 h-8 bg-gray-200 hover:bg-emerald-600 hover:text-gray-100 font-extrabold rounded-full flex flex-row justify-center items-center border border-black"
                        >
                          G
                        </a>
                        <a
                          href="/"
                          class="w-8 h-8 bg-gray-200 hover:bg-emerald-600 hover:text-gray-100 font-extrabold rounded-full flex flex-row justify-center items-center border border-black"
                        >
                          in
                        </a>
                      </div>
                    </div>
                    <div class="space-y-8">
                      <div class="flex flex-col text-left space-y-6">
                        <input
                          onChange={handleInput}
                          value={getSignin.email}
                          type="text"
                          name="email"
                          class="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                          placeholder="Email"
                        />
                        <input
                          onChange={handleInput}
                          value={getSignin.password}
                          required
                          type="text"
                          name="password"
                          class="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                          placeholder="Password"
                        />
                      </div>
                      <div class="space-y-2">
                        <button
                          type="submit"
                          class=" rounded-full px-20 py-3 overflow-hidden group bg-emerald-600 relative hover:bg-gradient-to-r hover:from-green-600 hover:to-green-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-600 transition-all ease-out duration-300"
                        >
                          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                          <span class="text-xl relative">
                            <p>Sign In</p>
                          </span>
                        </button>
                        <div class="">
                          <a
                            href="/"
                            class="text-base text-gray-400 font-normal hover:text-emerald-600"
                          >
                            <p>Do not have Account?</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <SigninSvg />
            </div>
          </div>
        </section>
        <Footer />
      </div>
      {getLoad && <Spinner />}
    </div>
  );
};

export default Signin;
