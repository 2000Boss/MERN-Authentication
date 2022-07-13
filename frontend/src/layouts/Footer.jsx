const Footer = () => {
  return (
    <>
      <section class="bg-slate-800 -mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0f172a"
            fill-opacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,186.7C672,160,768,128,864,144C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <footer class="text-gray-600 body-font bg-slate-900">
        <div class="container px-4 py-6 mx-auto">
          <div class="flex flex-wrap md:text-left order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="font-semibold text-gray-100 text-lg mb-3">
                Resources
              </h2>
              <ul class="list-none mb-10">
                <li class="my-2">
                  <a
                    href="/sitemap.xml/"
                    class="text-gray-300 hover:text-gray-100"
                  >
                    Sitemap
                  </a>
                </li>
                <li class="my-2">
                  <a href="/feed/" class="text-gray-300 hover:text-gray-100">
                    RSS feed
                  </a>
                </li>
                <li class="my-2">
                  <a
                    href="https://github.com/TheAbhijeet/djangocentral-bugs-and-features"
                    class="text-gray-300 hover:text-gray-100"
                  >
                    Feature request
                  </a>
                </li>
                <li class="my-2">
                  <a
                    href="https://github.com/TheAbhijeet/djangocentral-bugs-and-features"
                    class="text-gray-300 hover:text-gray-100"
                  >
                    Report bug
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="font-semibold text-gray-100 text-lg mb-3">Pages</h2>
              <ul class="list-none mb-10">
                <li class="my-2">
                  <a
                    href="/pages/about-us/"
                    class="text-gray-300 hover:text-gray-100"
                  >
                    About us
                  </a>
                </li>
                <li class="my-2">
                  <a
                    href="/pages/contact-us/"
                    class="text-gray-300 hover:text-gray-100"
                  >
                    Contact us
                  </a>
                </li>
                <li class="my-2">
                  <a
                    href="/pages/privacy-policy/"
                    class="text-gray-300 hover:text-gray-100"
                  >
                    Privacy policy
                  </a>
                </li>
                <li class="my-2">
                  <a
                    href="/pages/terms-and-conditions/"
                    class="text-gray-300 hover:text-gray-100"
                  >
                    Terms and conditions
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="font-semibold text-gray-100 text-lg mb-3">Explore</h2>
              <ul class="list-none mb-10">
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/articles/"
                  >
                    Articles
                  </a>
                </li>
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/madewithdjango/all/"
                  >
                    MadewithDjango
                  </a>
                </li>
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/books/all/"
                  >
                    Books
                  </a>
                </li>
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/courses/all/"
                  >
                    Courses
                  </a>
                </li>
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/tools/notepad/"
                  >
                    Notepad
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="font-semibold text-gray-100 text-lg mb-3">
                MadewithDjango
              </h2>
              <ul class="list-none mb-10">
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/madewithdjango/submit-project/"
                  >
                    Submit a project
                  </a>
                </li>
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/madewithdjango/tag/social-media"
                  >
                    Social Media
                  </a>
                </li>
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/madewithdjango/open-sourced/"
                  >
                    Open Source projects
                  </a>
                </li>
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/madewithdjango/tag/edtech"
                  >
                    Edtech
                  </a>
                </li>
                <li class="my-2">
                  <a
                    class="text-gray-300 hover:text-gray-100"
                    href="/madewithdjango/tag/fintech"
                  >
                    Fintech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-slate-900 items-center ml-48 justify-center">
          <div
            x-data="{ year: new Date().getFullYear() }"
            class="container px-5 py-6 lg:mx-auto flex items-center sm:flex-row flex-col"
          >
            <p
              aria-label="copyright"
              class="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4"
            >
              © <span x-text="year">2022</span> —
            </p>
            <p class="text-gray-400 ml-1" target="_blank">
              djangocentral |
              <span class="text-xs">
                Djangocentral is not associated with the DSF | Django is a
                registered trademark of the Django Software Foundation
              </span>
            </p>
            <p></p>
          </div>
        </div>
        <div class="fixed flex-col hidden gap-3 pl-0 ml-0 right-8 bottom-8 md:flex">
          <button
            x-data=""
            aria-label="Scroll To Top"
            type="button"
            class="p-2 transition-all rounded-full text-gray-400 bg-slate-700 hover:bg-gray-600"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-darkreader-inline-fill=""
              style={{ darkreaderInlineFill: "currentColor" }}
            >
              <path
                fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
