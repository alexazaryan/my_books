import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearError, selectErrorMessage } from "../../redux/slices/errorSlices";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Error() {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);

  console.log(errorMessage);

  return <ToastContainer position="top-right" autoClose={2000} />;
}
