import Card from "../components/Card";
import Fold from "../components/Fold";

const Cards = () => {
  return (
    <div className="relative px-5 py-24  w-3/4">
      <div className="mb-20">
        <div className="flex flex-col w-full mb-2 -mt-16">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-gray-100">
            LATEST
          </h1>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="pl-10">
        <div className="flex flex-col w-full -mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-gray-100">
            TRENDING
          </h1>
        </div>
        <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">
          <Fold />
          <Fold />
          <Fold />
        </div>
      </div>

      <div className="mb-20">
        <div className="flex flex-col w-full mb-2">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-gray-100">
            SCIENCE
          </h1>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-48"
                  src="https://images.unsplash.com/photo-1561654791-00316c79efa8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <a href="/" className="block mt-2">
                    <p className="text-xl font-semibold text-neutral-600">
                      Boost your conversion rate
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href="https://twitter.com/Mike_Andreuzza">
                      <span className="sr-only">Michael Andreuzza</span>
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-600">
                      <a
                        href="https://twitter.com/Mike_Andreuzza"
                        className="hover:underline"
                      >
                        Michaerl Andreuzza
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500 -mr-2">
                      <time dateTime="2020-03-16"> Mar 16, 2020 </time>
                      <span aria-hidden="true"> · </span>
                      <span> 6 min read </span>
                      <div className="pl-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-48"
                  src="https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2024&amp;q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <a
                    href="https://twitter.com/g_perales"
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-neutral-600">
                      How to use search engine optimization to drive sales
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href="https://twitter.com/g_perales">
                      <span className="sr-only">Gabriel Perales</span>
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://pbs.twimg.com/profile_images/1442898475218194432/61p-BNsg_400x400.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-600">
                      <a href="/" className="hover:underline">
                        Gabriel Perales
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500 -mr-2">
                      <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                      <span aria-hidden="true"> · </span>
                      <span> 4 min read </span>
                      <div className="pl-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-48"
                  src="https://images.unsplash.com/photo-1516245556508-7d60d4ff0f39?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <a href="/" className="block mt-2">
                    <p className="text-xl font-semibold text-neutral-600">
                      Improve your customer experience
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint harum rerum voluptatem quo recusandae magni placeat
                      saepe molestiae, sed excepturi cumque corporis perferendis
                      hic.
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href="https://twitter.com/wickedlabsHQ">
                      <span className="sr-only">Wicked Labs</span>
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-600">
                      <a
                        href="https://twitter.com/wickedlabsHQ"
                        className="hover:underline"
                      >
                        Wicked Labs
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500 -mr-2">
                      <time dateTime="2020-02-12"> Feb 12, 2020 </time>
                      <span aria-hidden="true"> · </span>
                      <span> 11 min read </span>
                      <div className="pl-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-10">
        <div className="flex flex-col w-full -mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-gray-100">
            ART
          </h1>
        </div>
        <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">
          <Fold />
          <Fold />
          <Fold />
        </div>
      </div>
    </div>
  );
};

export default Cards;
