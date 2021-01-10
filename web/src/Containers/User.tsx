import React from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "../Components/App/PrivateRoute";
import { Calendar } from "../Components/User/Dates/Calendar";
import { NewDateProvider } from "../Components/User/Dates/NewDate";

interface UserProps {}

export const User: React.FC<UserProps> = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/user/dates">
        <Calendar />
      </PrivateRoute>
      <PrivateRoute exact path="/user/dates/new">
        <NewDateProvider />
      </PrivateRoute>
    </Switch>
  );
};
