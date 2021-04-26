import React, { useEffect, useState } from "react";
import Input from "../../components/input/input"
import "./signin.css"
import Padlock from "../../assets/images/padlock.svg"
import Checkbox from "../../components/checkbox/checkbox";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

const SignIn = (props) => {
    const [emailValue, setEmail] = useState('');
    const [passwordValue, setPassword] = useState('');


    const regularEmail = /^([A-Za-z0-9_\-.]{3,})+@([A-Za-z0-9_\-.]{2,})+\.([A-Za-z]{2,})$/;
    const regularPassword = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

    const checkbox = document.getElementById('checkbox');
    const errors = document.querySelector('.error__container__signin');

    useEffect(() => {
        if(localStorage.authorizationToken === 'true' && localStorage.email && localStorage.password) {
            setEmail(localStorage.email.split('"').join(""));
            setPassword(localStorage.password.split('"').join(""));
        }
    }, [setEmail])

    const logIn = () => {
        while (errors.firstChild) {
            errors.removeChild(errors.firstChild);
        }
        if(emailValue === localStorage.email.split('"').join("") && passwordValue === localStorage.password.split('"').join("") && checkbox.checked) {
            localStorage.setItem('authorizationToken', true);
            props.history.push('/Homepage')
        } else if(emailValue === localStorage.email.split('"').join("") && passwordValue === localStorage.password.split('"').join("") && !checkbox.checked) {
            localStorage.setItem('authorizationToken', false);
            props.history.push('/Homepage')
        } else {
            errors.insertAdjacentHTML('beforeend', '<p class="error__signin">Wrong email or password</p>')
        }
    }
    return(
        <main className="signin">
            <div className="sign__logo">
                <object type="image/svg+xml" data={Padlock} width="25px">
                    Your browser does not support SVG
                </object>
            </div>
            <h3>Sign in</h3>
            <Input type="email" placeholder="Email Address *" onValueChange = {(emailValue) => {setEmail(emailValue)}} check={regularEmail.test(emailValue)} value={emailValue} />
            <Input type="password" placeholder="Password *" onValueChange = {(passwordValue) => {setPassword(passwordValue)}} check={regularPassword.test(passwordValue)} value={passwordValue} />
            <Checkbox label="Remember me" />
            <Button text="Sign in" onButtonClick={logIn} />
            <div className="links__container">
                <Link className="link" to="/SignIn">Forgot password?</Link>
                <Link className="link" to="/SignUp">Don't have an account? Sign Up</Link>
            </div>
            <p className="copyright">Copyright © Your Website 2020.</p>
            <div className="error__container__signin"></div>
        </main>
    )
};

export default SignIn;