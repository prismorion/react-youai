import React from "react";
import { useState } from "react";
import styles from "../styles/PasswordField.module.css";

function PasswordField({ label, id, name, placeholder, required = false, ...rest }) {
  const [show, setShow] = useState(false);

  return (
    <>
        <label htmlFor={id} className={styles.labelForInput}>
            {label}
        </label>
        <div className={styles.inputPassword}>
            <input
                id={id}
                name={name}
                type={show ? "text" : "password"}
                placeholder={placeholder}
                required={required}
                {...rest}
            />
            <img
                src={show ? "icons/password-hide.png" : "icons/password-show.png"}
                alt={show ? "Скрыть пароль" : "Показать пароль"}
                className={styles.eye}
                onClick={() => setShow(prev => !prev)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") setShow(prev => !prev);
                }}
            />
        </div>
    </>
  );
}

export default PasswordField;