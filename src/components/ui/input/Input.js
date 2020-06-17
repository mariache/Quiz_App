import React from "react";
import classes from "./Input.module.css";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

export const Input = (props) => {
  const inputType = props.type || "text";
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>
        {props.label}
        <input
          type={inputType}
          name=""
          id={htmlFor}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
      {isInvalid(props) ? (
        <span>{props.errorMessage || "Please enter the value"}</span>
      ) : null}
    </div>
  );
};

export default Input;
