import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Pricing from "./pages/Pricing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
