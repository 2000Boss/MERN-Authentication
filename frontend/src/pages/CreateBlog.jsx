import { useState } from "react";
import { useSelector } from "react-redux";
import Request from "../services/Axios-CRUD";

const CreateBlog = () => {
  const tags = [
    "Technology",
    "Science",
    "Politcs",
    "Education",
    "Self",
    "Art",
    "Geography",
  ];
  const [getText, setText] = useState({
    title: "",
    tags: [],
    body: "",
    user: useSelector((state) => state.user._id),
    photoLink: "",
    description: "",
  });

  const handleInput = (event) => {
    setText((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = (event) => {
    setText((values) => ({
      ...values,
      tags: [...values.tags, event.target.name],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Request.createBlog(getText).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div class="container mx-auto">
      <div class="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-gray-700">New Blog</h1>
          <p class="text-gray-400">Create the blog post</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <h2>TAGS</h2>
              <div className="border-t-2 pt-1">
                {tags.map((tag, index) => {
                  return (
                    <button
                      name={tag}
                      key={index + tag}
                      onClick={handleClick}
                      className="border-2 px-4 py-1 inline-block my-1 rounded-full"
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
            <div class="mb-6">
              <label for="name" class="block mb-2 text-sm text-gray-600">
                Title
              </label>
              <input
                value={getText.title}
                onChange={handleInput}
                type="text"
                name="title"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm text-gray-600">
                Description
              </label>
              <input
                value={getText.description}
                onChange={handleInput}
                type="text"
                name="description"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label for="phone" class="text-sm text-gray-600">
                Photo Link
              </label>
              <input
                value={getText.photoLink}
                onChange={handleInput}
                type="text"
                name="photoLink"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-sm text-gray-600">
                Post
              </label>

              <textarea
                value={getText.body}
                onChange={handleInput}
                rows="5"
                name="body"
                placeholder="Blog Post"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
              >
                Create the Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
