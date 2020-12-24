import React from "react";
import { Route, Switch } from "react-router-dom";
import { Calendar } from "../Components/User/Dates/Calendar";
import { NewDateProvider } from "../Components/User/Dates/NewDate";

interface UserProps {}

export const User: React.FC<UserProps> = () => {
  return (
    <Switch>
      <Route exact path="/user/dates">
        <Calendar />
      </Route>
      <Route exact path="/user/dates/new">
        <NewDateProvider />
      </Route>
    </Switch>
  );
};
