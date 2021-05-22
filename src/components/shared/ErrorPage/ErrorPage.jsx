
//react & router
import React from "react";
import { Link } from "react-router-dom";
//define err and put back link "/"
const ErrorPage = () => {
    return (<div
            style={{display: "flex",justifyContent: "center",          alignItems: "center",      flexDirection: "column", }}>
            <h1>Mortal Error</h1>
            <h3> <Link to="/">Return</Link></h3> </div>);};
//export err page
export default ErrorPage;
