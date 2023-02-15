import { toast } from "react-toastify";

// eslint-disable-next-line import/prefer-default-export
export const notify = (
  variant: "success" | "error" | "warn" | "info",
  text: string
) => {
  switch (variant) {
    case "success":
      toast.success(text, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case "error":
      toast.error(text, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case "info":
      toast.info(text, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    default:
      toast.warn(text, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
  }
};
