import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Pricing from "../layouts/Pricing";

const Payment = () => {
  return (
    <div>
      <Navbar Payment={true} />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Payment;
