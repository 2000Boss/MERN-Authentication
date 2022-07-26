const Sidebar = () => {
  return (
    <div className="w-1/4">
      <div>
        <div>
          <h2>TAGS</h2>
          <div className="border-t-2 pt-1">
            <a
              href="/"
              className="border-2 px-4 py-1 inline-block my-1 rounded-full"
            >
              Technology
            </a>
            <a
              href="/"
              className="border-2 px-4 py-1 inline-block my-1 rounded-full"
            >
              Science
            </a>
            <a
              href="/"
              className="border-2 px-4 py-1 inline-block my-1 rounded-full"
            >
              Politics
            </a>
            <a
              href="/"
              className="border-2 px-4 py-1 inline-block my-1 rounded-full"
            >
              Education
            </a>
            <a
              href="/"
              className="border-2 px-4 py-1 inline-block my-1 rounded-full"
            >
              Self
            </a>
            <a
              href="/"
              className="border-2 px-4 py-1 inline-block my-1 rounded-full"
            >
              Art
            </a>
            <a
              href="/"
              className="border-2 px-4 py-1 inline-block my-1 rounded-full"
            >
              Geography
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
