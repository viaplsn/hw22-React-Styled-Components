import React from "react";
import './button.css';

const Button = (props) => {
    const { onButtonClick } = props;
    const signIn = () => {
        onButtonClick()
    }
    return(
        <button className="main__button" onClick={signIn}>{props.text}</button>
    )
};

export default Button;