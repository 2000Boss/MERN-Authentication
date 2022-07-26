import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import Request from "../services/Axios-CRUD";
import { updateProfile } from "../StoreConfig/features/UserSlice";
import Error from "../layouts/Error";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, _id } = useSelector(
    (state) => state.user
  );

  const [getError, setError] = useState("");

  const [getProfile, setProfile] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    photo:
      "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  });

  const handlePhoto = (event) => {
    Request.AWS_Link().then((res) => {
      Request.updateProfile({ photo: res.data.url }, _id)
        .then((res) => {
          dispatch(
            updateProfile({
              _id: res.data.data.data._id,
              email: res.data.data.data.email,
              firstName: res.data.data.data.firstName,
              lastName: res.data.data.data.lastName,
              photo: res.data.data.data.photo,
            })
          );

          axios
            .put(res.data.data.data.photo, event.target.files[0], {
              headers: {
                "Content-type": event.target.files[0].type,
              },
            })
            .then((res) =>
              setProfile({
                photo:
                  res.request.responseURL.substr(0, 119) ||
                  "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
              })
            );
        })
        .catch((error) => {
          console.log(error.response.data.error);
        });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      <div className="flex flex-col w-1/4 bg-white rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <a href="#Profile">
            <img className="w-20 h-20" src={getProfile.photo} alt="" />
          </a>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link
              to="/"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-home"></i>
              </span>
              <span className="text-sm font-medium">Home</span>
            </Link>
          </li>
          <li>
            <a
              href="#Blogs"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-music"></i>
              </span>
              <span className="text-sm font-medium">My Blogs</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-drink"></i>
              </span>
              <span className="text-sm font-medium">New Blog</span>
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-shopping-bag"></i>
              </span>
              <span className="text-sm font-medium">Subscribe</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-chat"></i>
              </span>
              <span className="text-sm font-medium">Chat</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-user"></i>
              </span>
              <span className="text-sm font-medium">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-bell"></i>
              </span>
              <span className="text-sm font-medium">Notifications</span>
              <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                5
              </span>
            </a>
          </li>
          <li>
            <a
              href="/logout"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-log-out"></i>
              </span>
              <span className="text-sm font-medium">Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-3/4 mx-6 my-10 space-y-20">
        {<Error setError={setError}>{getError}</Error>}
        <div id="Blogs" className="border-b-4 border-slate-700">
          <div className="p-10">
            <div className="w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://flowbite.com/docs/images/blog/image-1.jpg')",
                }}
                title="Mountain"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Best Mountain Trails 2020
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt="Avatar of Writer"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">John Smith</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://flowbite.com/docs/images/blog/image-1.jpg')",
                }}
                title="Mountain"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Best Mountain Trails 2020
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt="Avatar of Writer"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">John Smith</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://flowbite.com/docs/images/blog/image-1.jpg')",
                }}
                title="Mountain"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Best Mountain Trails 2020
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt="Avatar of Writer"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">John Smith</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://flowbite.com/docs/images/blog/image-1.jpg')",
                }}
                title="Mountain"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Best Mountain Trails 2020
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt="Avatar of Writer"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">John Smith</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://flowbite.com/docs/images/blog/image-1.jpg')",
                }}
                title="Mountain"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Best Mountain Trails 2020
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt="Avatar of Writer"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">John Smith</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://flowbite.com/docs/images/blog/image-1.jpg')",
                }}
                title="Mountain"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Best Mountain Trails 2020
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt="Avatar of Writer"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">John Smith</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          id="Profile"
          className="shadow-lg border-b-4 border-slate-700 border-2  space-y-6 py-10"
        >
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                <img
                  src={getProfile.photo}
                  className="object-cover w-16 h-16 rounded-full"
                  alt=""
                />
              </div>
              <label className="block">
                <span className="sr-only">Choose File</span>
                <input
                  onChange={handlePhoto}
                  required
                  type="file"
                  accept="image/*"
                  name="photo"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col content-start pt-4 text-center">
            <div className="text-base font-[450] h-full w-full">
              <div className="mx-44">
                <div>
                  <div className="space-y-8">
                    <div className="flex flex-col text-left space-y-6">
                      <input
                        onChange={(event) =>
                          setProfile((values) => ({
                            ...values,
                            [event.target.name]: event.target.value,
                          }))
                        }
                        value={getProfile.firstName}
                        required
                        type="text"
                        name="firstName"
                        className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="First Name"
                      />
                      <input
                        onChange={(event) =>
                          setProfile((values) => ({
                            ...values,
                            [event.target.name]: event.target.value,
                          }))
                        }
                        value={getProfile.firstName}
                        required
                        type="text"
                        name="lastName"
                        className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Last Name"
                      />
                      <input
                        onChange={(event) =>
                          setProfile((values) => ({
                            ...values,
                            [event.target.name]: event.target.value,
                          }))
                        }
                        value={getProfile.firstName}
                        required
                        type="text"
                        name="email"
                        className="rounded-md shadow-md dark:shadow-neutral-600 focus:shadow-lg bg-slate-100 items-center pl-3 py-2 focus:outline-none focus:bg-gray-100 border-1 border-gray-200"
                        placeholder="Email"
                      />
                    </div>
                    <div className="space-y-2">
                      <button
                        type="submit"
                        className="rounded-full px-20 py-3 overflow-hidden group bg-emerald-600 relative hover:bg-gradient-to-r hover:from-green-600 hover:to-green-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-600 transition-all ease-out duration-300"
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="text-xl relative">
                          <p>Save Changes</p>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
