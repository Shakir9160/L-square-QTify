import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import styles from "./Button.module.css";

function Button({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.button} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && <Feedback open={open} handleClose={() => setOpen(false)} />}
    </>
  );
}

export default Button;
