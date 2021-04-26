import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return(
        <main className="homepage">
            <h1>Hello, {JSON.parse(localStorage.firstName)} {JSON.parse(localStorage.lastName)}</h1>
            <Link className="link" to="/SignIn">Logout</Link>
        </main>
    )
};

export default Homepage