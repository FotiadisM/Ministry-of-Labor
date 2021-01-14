import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { UserContext } from "../../Context/context";

export const PrivateRoute: React.FC<RouteProps> = ({
  children,
  location,
  ...rest
}) => {
  const userContext = useContext(UserContext);
  const { userInfo } = userContext!;

  return (
    <Route {...rest}>
      {userInfo.isLogedIn ? (
        children
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export const PrivateEmployerRoute: React.FC<RouteProps> = ({
  children,
  location,
  ...rest
}) => {
  const userContext = useContext(UserContext);
  const { userInfo } = userContext!;

  return (
    <Route {...rest}>
      {userInfo.user !== null ? (
        userInfo.user.employmentInfo !== null ? (
          userInfo.user.employmentInfo.isOwner ? (
            children
          ) : null
        ) : null
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};
