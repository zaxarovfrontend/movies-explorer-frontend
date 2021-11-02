import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteLoggedIn = (props) => {
    const {
        loggedIn,
        children,
        path
    } = props;

    return (
        <Route path={ path }>
            { loggedIn ? <Redirect to="/movies" /> : children}
        </Route>
    );
};

export default ProtectedRouteLoggedIn;
