import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../Components/App/PrivateRoute";
import { Calendar } from "../Components/User/Dates/Calendar";
import { NewDateProvider } from "../Components/User/Dates/NewDate";
import { UserOrganization } from "../Components/User/Organization/UserOrganization";
import { UserProfile } from "../Components/User/User/UserProfile";
import { UserContext } from "../Context/context";

export const UserRouter: React.FC = () => {
  const userContext = useContext(UserContext);
  const { userInfo } = userContext!;

  let isEmployd = false;
  if (userInfo.user !== null) {
    if (userInfo.user.employmentInfo !== null) {
      isEmployd = true;
    }
  }

  return (
    <Switch>
      <PrivateRoute exact path="/user/profile">
        <UserProfile />
      </PrivateRoute>
      <PrivateRoute exact path="/user/dates">
        <Calendar />
      </PrivateRoute>
      <PrivateRoute exact path="/user/dates/new">
        <NewDateProvider />
      </PrivateRoute>
      {isEmployd ? (
        <PrivateRoute exact path="/user/organization">
          <UserOrganization />
        </PrivateRoute>
      ) : null}
      <Route path="/user">
        <div className="text-center fw-bold fs-4">404</div>
      </Route>
    </Switch>
  );
};
