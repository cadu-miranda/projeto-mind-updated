import { toast } from "react-toastify";

export function ToastNotifier({
  toastMessage,
  toastType,
  toastDuration = 2500,
}) {
  return toastType === "success"
    ? toast.success(toastMessage, {
        position: "top-right",
        autoClose: toastDuration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      })
    : toastType === "warn"
    ? toast.warn(toastMessage, {
        position: "top-right",
        autoClose: toastDuration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      })
    : toastType === "error"
    ? toast.error(toastMessage, {
        position: "top-right",
        autoClose: toastDuration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      })
    : "";
}
