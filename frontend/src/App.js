import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Pricing from "./pages/Pricing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivateRouter from "./services/PrivateRouter";
import Checkout from "./pages/Payment-Note";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ResetPasswordEmail from "./pages/ResetPasswordEmail";
// import Success from "./components/checkout/stripe-checkout/success";
// import Canceled from "./components/checkout/stripe-checkout/canceled";

import { Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact element={<PrivateRouter />}>
        <Route path="/payment/:subscribeId" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editor" element={<CreateBlog />} />
        <Route path="/reset" element={<ResetPasswordEmail />} />
      </Route>

      {/* <Route path="/success" component={Success} /> */}
      {/* <Route path="canceled" component={Canceled} /> */}

      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
