import SignupSvg from "../static/SignupSvg";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Spinner from "../components/Spinner";
import Request from "../services/Axios-CRUD";
import { updateUser } from "../StoreConfig/features/UserSlice";
import { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../layouts/Error";

const Signup = () => {
  const [getLoad, setLoad] = useState(false);
  const [getError, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [getAnswer, setAnswer] = useState("");
  const [getSignup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    _id: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);
    Request.signup(getSignup)
      .then((res) => {
        setSignup({ _id: res.data.data.user._id });

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
            // subscribtion: Cookies.get("subscribtion") || "NO",
          })
        );

        res.data.status === "success" && navigate("/");

        setLoad(false);
      })
      .catch((error) => {
        setError(error.response.data.msg);
        setLoad(false);
      });
  };

  return (
    <div className={getLoad && "relative z-10"}>
      <div className="dark:bg-slate-800">
        <Navbar Signup={true} />
        {<Error setError={setError}>{getError}</Error>}

        <section className="text-gray-600 bg-slate-800">
          <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 flex flex-col content-start pt-4 text-center">
              <form
                className="text-base font-[450] h-full w-full"
                onSubmit={handleSubmit}
              >
                <div className="mx-44">
                  <div>
                    <div className="mb-6 space-y-4">
                      <h1 className="font-medium text-4xl text-emerald-600">
                        <p>Create Account</p>
                      </h1>
                      <div className="space-x-8 flex items-center justify-center">
                        <a
                          href="/"
                          className="w-8 h-8 bg-gray-200 hover:bg-emerald-600 hover:text-gray-100 font-extrabold rounded-full flex flex-row justify-center items-center border border-black"
                        >
                          f
                        </a>
                        <a
                          href="/"
                          className="w-8 h-8 bg-gray-200 hover:bg-emerald-600 hover:text-gray-100 font-extrabold rounded-full flex flex-row justify-center items-center border border-black"
                        >
                          G
                        </a>
                        <a
                          href="/"
                          className="w-8 h-8 bg-gray-200 hover:bg-emerald-600 hover:text-gray-100 font-extrabold rounded-full flex flex-row justify-center items-center border border-black"
                        >
                          in
                        </a>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="flex flex-col text-left space-y-6">
                        <input
                          onChange={(event) =>
                            setSignup((values) => ({
                              ...values,
                              [event.target.name]: event.target.value,
                            }))
                          }
                          value={getSignup.firstName}
                          required
                          type="text"
                          name="firstName"
                          className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                          placeholder="First Name"
                        />
                        <input
                          onChange={(event) =>
                            setSignup((values) => ({
                              ...values,
                              [event.target.name]: event.target.value,
                            }))
                          }
                          value={getSignup.lastName}
                          required
                          type="text"
                          name="lastName"
                          className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                          placeholder="Last Name"
                        />
                        <input
                          onChange={(event) =>
                            setSignup((values) => ({
                              ...values,
                              [event.target.name]: event.target.value,
                            }))
                          }
                          required
                          value={getSignup.email}
                          type="text"
                          name="email"
                          className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                          placeholder="Email"
                        />
                        <input
                          onChange={(event) =>
                            setSignup((values) => ({
                              ...values,
                              [event.target.name]: event.target.value,
                            }))
                          }
                          value={getSignup.password}
                          required
                          type="text"
                          name="password"
                          className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                          placeholder="Password"
                        />
                        <input
                          onChange={(event) =>
                            setSignup((values) => ({
                              ...values,
                              [event.target.name]: event.target.value,
                            }))
                          }
                          value={getSignup.confirmPassword}
                          required
                          type="text"
                          name="confirmPassword"
                          className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="space-y-2">
                        <button
                          type="submit"
                          className=" rounded-full px-20 py-3 overflow-hidden group bg-emerald-600 relative hover:bg-gradient-to-r hover:from-green-600 hover:to-green-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-600 transition-all ease-out duration-300"
                        >
                          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                          <span className="text-xl relative">
                            <p>Sign Up</p>
                          </span>
                        </button>
                        <div className="">
                          <a
                            href="/"
                            className="text-base text-gray-400 font-normal hover:text-emerald-600"
                          >
                            <p>Already have account?</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <SignupSvg />
            </div>
          </div>
        </section>
        <Footer />
      </div>
      {getLoad && <Spinner />}
    </div>
  );
};

export default Signup;
