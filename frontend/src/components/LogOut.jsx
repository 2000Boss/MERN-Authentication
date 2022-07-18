import { useDispatch } from "react-redux";
import { deleteUser } from "../StoreConfig/features/UserSlice";
// import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(deleteUser()).then(() => {
    navigate("/", { replace: true });
  });

  Cookies.remove("logged_in");

  //   return <Spinner />;
};
