import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAdmin from "./isAdmin";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                !isAdmin() &&
                    alert("점근 권한이 없습니다. 로그인 후 다시 시도하십시오.");
                return isAdmin() ? <Component {...props} /> : <Redirect to="/sign-in" />;
            }}
        />
    );
}
export default PrivateRoute;