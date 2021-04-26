import React from "react";
import './checkbox.css';

const Checkbox = (props) => {
    return(
        <div className="checkbox__container">
            <input id="checkbox" type="checkbox" name="happy" value="yes" />
            <label htmlFor="checkbox" className="checkbox__label">{props.label}</label>
        </div>
    )
};

export default Checkbox;
