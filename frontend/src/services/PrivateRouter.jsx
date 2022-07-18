import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import Cookies from "js-cookie";

const PrivateRouter = () => {
  const location = useLocation();
  const logged_in = Cookies.get("logged_in");
  return (
    <>
      {logged_in ? (
        <Outlet />
      ) : (
        <Navigate to="/signin" replace state={{ from: location }} />
      )}
      ;
    </>
  );
};

export default PrivateRouter;
