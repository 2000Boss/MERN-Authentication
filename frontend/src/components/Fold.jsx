import React from "react";

const Fold = () => {
  return (
    <a href="/">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img
            class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
            src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="blog"
          />
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class="">Entry</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">
              Install Tailwind CSS without any Javascript Framewrok locally with
              purgeCSS, enable the dark mode option, prefferences or class is
              upt to you.
            </p>
            <div class="flex items-center mt-6 -mb-2">
              <div>
                <img
                  class="inline-block rounded-full h-9 w-9"
                  src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-700 group-hover:text-neutral-600">
                  Jazz Torp
                </p>
              </div>
              <div class="pl-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Fold;
