import Footer from "../layouts/Footer";
import Form from "../layouts/Form";
import Navbar from "../layouts/Navbar";

const Signin = () => {
  return (
    <div class="dark:bg-slate-800">
      <Navbar Signin={true} />
      <section class="text-gray-600 bg-slate-800">
        <Form Signin={true} />
      </section>
      <Footer />
    </div>
  );
};

export default Signin;
