
import css from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <p className={css.error}>
      Oops! Something went wrong. Please try again.
    </p>
  );
}

export default ErrorMessage;
