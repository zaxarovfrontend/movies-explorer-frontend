import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
    const { loggedIn, children, path } = props;

    return (
        <Route path={ path }>
            { loggedIn ? children : <Redirect to="/signin" /> }
        </Route>
    );
};

export default ProtectedRoute;
