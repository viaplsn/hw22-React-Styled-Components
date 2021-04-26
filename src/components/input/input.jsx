import React from "react";
import classNames from 'classnames';
import "./input.css";

const Input = (props) => {
    const { onValueChange, placeholder, type, check, value } = props;
    const setValue = (e) => {
        onValueChange(e.target.value);
    }
    return <input className={classNames('input', {
        input__text: type === "text",
        input__password: type === "password",
        input__email: type === "email",
        input__checked: check,
        input__unchecked: !check && value !== ''
    })} type={type} placeholder={placeholder} onChange={setValue} value={value} />
};

export default Input;