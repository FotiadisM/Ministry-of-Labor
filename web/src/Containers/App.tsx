import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Middleware } from "../Components/App/Middleware";
import { CovidRouter } from "../Components/Covid/Covid";
import { UserContext } from "../Context/context";
import { Contact } from "./Contact";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { OrganizationRouter } from "./OrganizationRouter";
import { UserRouter } from "./UserRouter";

function App() {
  const [userInfo, setUserInfo] = useState<UserState>({
    isLogedIn: false,
    user: null,
  });

  return (
    <UserContext.Provider
      value={{ userInfo: userInfo, setUserInfo: setUserInfo }}
    >
      <Switch>
        <Route exact path="/">
          <Middleware>
            <Homepage />
          </Middleware>
        </Route>
        <Route exact path="/contact">
          <Middleware>
            <Contact />
          </Middleware>
        </Route>
        <Route exact path="/login">
          <Middleware>
            <Login />
          </Middleware>
        </Route>
        <Route path="/covid">
          <Middleware>
            <CovidRouter />
          </Middleware>
        </Route>
        {/* {userInfo.user !== null ? ( */}
        <Route path="/user">
          <Middleware>
            <UserRouter />
          </Middleware>
        </Route>
        {/* ) : null}
        {userInfo.user !== null ? ( */}
        <Route path="/organization">
          <Middleware>
            <OrganizationRouter />
          </Middleware>
        </Route>
        {/* ) : null} */}
        <Route path="/">
          <h4 className="text-center">
            404, the page you are trying to reach doesn't exist
          </h4>
        </Route>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
