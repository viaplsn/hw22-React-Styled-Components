import React, { useState } from "react";
import Input from "../../components/input/input"
import "./signup.css"
import Padlock from "../../assets/images/padlock.svg"
import Checkbox from "../../components/checkbox/checkbox";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

const SignUp = (props) => {
    const [emailValue, setEmail] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [firstNameValue, setFirstName] = useState('');
    const [lastNameValue, setLastName] = useState('');

    const regularEmail = /^([A-Za-z0-9_\-.]{3,})+@([A-Za-z0-9_\-.]{2,})+\.([A-Za-z]{2,})$/;
    const regularPassword = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
    const regularName = /^[A-Za-zа-яА-ЯёЁіІєЄ']{3,}$/;
    const errors = document.querySelector('.error__container__signup');

    const subscribe = () => {
        while (errors.firstChild) {
            errors.removeChild(errors.firstChild);
        }
        if(regularEmail.test(emailValue) && regularPassword.test(passwordValue) && regularName.test(firstNameValue) && regularName.test(lastNameValue)) {
            localStorage.setItem('authorizationToken', false);
            localStorage.setItem('firstName', JSON.stringify(firstNameValue));
            localStorage.setItem('lastName', JSON.stringify(lastNameValue));
            localStorage.setItem('email', JSON.stringify(emailValue));
            localStorage.setItem('password', JSON.stringify(passwordValue));
            props.history.push('/SignIn')
        }else {
            errors.insertAdjacentHTML('beforeend', '<p class="error__signup">Please fill out all required fields correctly</p>')
        }
    }
    return(
        <main className="signup">
            <div className="sign__logo">
                <object type="image/svg+xml" data={Padlock} width="25px">
                    Your browser does not support SVG
                </object>
            </div>
            <h3>Sign up</h3>
            <div className="name__container">
                <Input type="text" placeholder="First Name *" onValueChange = {(firstNameValue) => {setFirstName(firstNameValue)}} check={regularName.test(firstNameValue)} value={firstNameValue} />
                <Input type="text" placeholder="Last Name *" onValueChange = {(lastNameValue) => {setLastName(lastNameValue)}} check={regularName.test(lastNameValue)} value={lastNameValue} />
            </div>
            <Input type="email" placeholder="Email Address *" onValueChange = {(emailValue) => {setEmail(emailValue)}} check={regularEmail.test(emailValue)} value={emailValue} />
            <Input type="password" placeholder="Password *" onValueChange = {(passwordValue) => {setPassword(passwordValue)}} check={regularPassword.test(passwordValue)} value={passwordValue} />
            <Checkbox label="I want to receive inspiration, marketing promotions and updates via email." />
            <Button text="Sign up" onButtonClick={subscribe} />
            <div className="links__signup">
                <Link className="link" to="/SignIn">Already have an account? Sign in</Link>
            </div>
            <p className="copyright">Copyright © Your Website 2020.</p>
            <div className="error__container__signup"></div>
        </main>
    )
};

export default SignUp;