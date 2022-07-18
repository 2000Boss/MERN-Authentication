import Footer from "../layouts/Footer";
import Form from "../layouts/Form";
import Navbar from "../layouts/Navbar";
import Spinner from "../components/Spinner";
import { useState } from "react";

const Signup = () => {
  const [getLoad, setLoad] = useState(false);

  return (
    <div className={getLoad && "relative z-10"}>
      <div class="dark:bg-slate-800">
        <Navbar Signup={true} />
        <section class="text-gray-600 bg-slate-800">
          <Form Signup={true} setLoad={setLoad} />
        </section>
        <Footer />
      </div>
      {getLoad && <Spinner />}
    </div>
  );
};

export default Signup;
