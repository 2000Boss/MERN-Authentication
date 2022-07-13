import SignupSvg from "../static/SignupSvg";
import SigninSvg from "../static/SigninSvg";
import PaymentSvg from "../static/PaymentSvg";
const Form = (props) => {
  return (
    <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 flex flex-col content-start pt-4 text-center">
        <form class="text-base font-[450] h-full w-full">
          <div class="mx-44">
            <div>
              <div class="mb-6 space-y-4">
                <h1 class="font-medium text-4xl text-emerald-600">
                  {props.Signup ? (
                    <p>Create Account</p>
                  ) : props.Signin ? (
                    <p>Sign In</p>
                  ) : (
                    <p>Payment</p>
                  )}
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
                  {props.Signup ? (
                    <>
                      <input
                        type="text"
                        name="firstName"
                        class="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        name="firstName"
                        class="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Last Name"
                      />
                      <input
                        type="text"
                        name="email"
                        class="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        name="Password"
                        class="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Password"
                      />
                      <input
                        type="text"
                        name="confirmPassword"
                        class="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Confirm Password"
                      />
                    </>
                  ) : props.Signin ? (
                    <>
                      <input
                        type="text"
                        name="email"
                        class="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        name="Password"
                        class="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Password"
                      />
                    </>
                  ) : (
                    <p>Payment</p>
                  )}
                </div>
                <div class="space-y-2">
                  <button
                    type="submit"
                    class=" rounded-full px-20 py-3 overflow-hidden group bg-emerald-600 relative hover:bg-gradient-to-r hover:from-green-600 hover:to-green-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-600 transition-all ease-out duration-300"
                  >
                    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span class="text-xl relative">
                      {props.Signup ? (
                        <p>Sign Up</p>
                      ) : props.Signin ? (
                        <p>Sign In</p>
                      ) : (
                        <p>Confirm Payment</p>
                      )}
                    </span>
                  </button>
                  <div class="">
                    <a
                      href="/"
                      class="text-base text-gray-400 font-normal hover:text-emerald-600"
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
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
