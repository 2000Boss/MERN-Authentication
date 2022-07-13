import Footer from "../layouts/Footer";
import Form from "../layouts/Form";
import Navbar from "../layouts/Navbar";

const Payment = () => {
  return (
    <div class="dark:bg-slate-800">
      <Navbar Payment={true} />
      <section class="text-gray-600 bg-slate-800">
        <Form Payment={true} />
      </section>
      <Footer />
    </div>
  );
};

export default Payment;
