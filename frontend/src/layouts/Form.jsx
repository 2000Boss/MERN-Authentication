import SignupSvg from "../static/SignupSvg";
import SigninSvg from "../static/SigninSvg";
import PaymentSvg from "../static/PaymentSvg";
import Request from "../services/Axios-CRUD";
import { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../StoreConfig/features/UserSlice";

const Form = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [getAnswer, setAnswer] = useState("");
  const [getSignin, setSignin] = useState({ email: "", password: "" });
  const [getSignup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [getPayment, setPayment] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setLoad(true);
    props.Signin
      ? Request.login(getSignin)
          .then((res) => {
            setAnswer(res.data);

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
            props.setLoad(false);
          })
          .catch((error) => {
            console.log(error.response.data.error);
            props.setLoad(false);
          })
      : props.Signup
      ? Request.signup(getSignup).then((res) => {
          setAnswer(res.data);
          Cookies.set("logged_in", "yes", {
            secure: true,
            expires: res.data.expires,
          });

          dispatch(
            updateUser({
              email: getSignup.email,
              firstName: getSignup.firstName,
              lastName: getSignup.lastName,
              subscribtion: Cookies.get("subscribtion") || "NO",
            })
          );
          res.data.status === "success" && navigate("/");
          props.setLoad(false);
        })
      : Request.peyment(getPayment).then((res) => {
          setAnswer(res.data);
          res.data.status === "success" && navigate("/");
          props.setLoad(false);
        });

    setSignin({
      email: "",
      password: "",
    });

    setSignup({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setPayment({
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    });
  };

  console.log(getSignup);
  console.log(getAnswer);

  return (
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
                  {props.Signup ? (
                    <p>Create Account</p>
                  ) : props.Signin ? (
                    <p>Sign In</p>
                  ) : (
                    <p>Payment</p>
                  )}
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
                  {props.Signup ? (
                    <>
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
                        value={getSignup.email}
                        required
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
                    </>
                  ) : props.Signin ? (
                    <>
                      <input
                        onChange={(event) =>
                          setSignin((values) => ({
                            ...values,
                            [event.target.name]: event.target.value,
                          }))
                        }
                        value={getSignin.email}
                        required
                        type="text"
                        name="email"
                        className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Email"
                      />
                      <input
                        onChange={(event) =>
                          setSignin((values) => ({
                            ...values,
                            [event.target.name]: event.target.value,
                          }))
                        }
                        value={getSignin.password}
                        required
                        type="text"
                        name="password"
                        className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Password"
                      />
                    </>
                  ) : (
                    <>
                      <input
                        onChange={(event) =>
                          setPayment((values) => ({
                            ...values,
                            [event.target.name]: event.target.value,
                          }))
                        }
                        value={getPayment.cardNumber}
                        required
                        type="text"
                        name="cardNumber"
                        className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Card Number"
                      />
                      <input
                        onChange={(event) =>
                          setPayment((values) => ({
                            ...values,
                            [event.target.name]: event.target.value,
                          }))
                        }
                        value={getPayment.expiryDate}
                        required
                        type="text"
                        name="expiryDate"
                        className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="ExpiryDate"
                      />
                      <input
                        onChange={(event) =>
                          setPayment((values) => ({
                            ...values,
                            [event.target.name]: event.target.value,
                          }))
                        }
                        value={getPayment.cvc}
                        required
                        type="text"
                        name="cvc"
                        className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="CVC"
                      />
                    </>
                  )}
                </div>
                <div className="space-y-2">
                  <button
                    type="submit"
                    className=" rounded-full px-20 py-3 overflow-hidden group bg-emerald-600 relative hover:bg-gradient-to-r hover:from-green-600 hover:to-green-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-600 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="text-xl relative">
                      {props.Signup ? (
                        <p>Sign Up</p>
                      ) : props.Signin ? (
                        <p>Sign In</p>
                      ) : (
                        <p>Confirm Payment</p>
                      )}
                    </span>
                  </button>
                  <div className="">
                    <a
                      href="/"
                      className="text-base text-gray-400 font-normal hover:text-emerald-600"
                    >
                      {props.Signup ? (
                        <p>Already have account?</p>
                      ) : props.Signin ? (
                        <p>Do not have Account?</p>
                      ) : (
                        <p></p>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {props.Signup ? (
          <SignupSvg />
        ) : props.Signin ? (
          <SigninSvg />
        ) : (
          <PaymentSvg />
        )}
      </div>
    </div>
  );
};

export default Form;
