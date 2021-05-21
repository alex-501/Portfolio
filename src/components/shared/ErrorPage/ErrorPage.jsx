import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h1>Woops!!!!</h1>
            <h3>Looks like this page doesn't exists</h3>
            <h4>
                Let's head back <Link to="/">Home</Link>
            </h4>
        </div>
    );
};

export default ErrorPage;
