import Footer from "../layouts/Footer";
import Form from "../layouts/Form";
import Navbar from "../layouts/Navbar";

const Signup = () => {
  return (
    <div class="dark:bg-slate-800">
      <Navbar Signup={true} />
      <section class="text-gray-600 bg-slate-800">
        <Form Signup={true} />
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
