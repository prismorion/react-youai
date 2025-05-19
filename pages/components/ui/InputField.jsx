import React from "react";
import styles from "../styles/InputField.module.css";

function InputField({label, id, name, type = "text", placeholder, required = false, ...rest}) {
    return (
        <>
            <label htmlFor={id} className={styles.labelForInput}>
                {label}
            </label>
            <input
                id={id}
                className={styles.inputText}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                {...rest}
            />
        </> 
    );
}

export default InputField;