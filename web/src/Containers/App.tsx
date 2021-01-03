import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { CovidRouter } from "../Components/Covid/Covid";
import { Footer } from "../Components/Footer/Footer";
import { NavBar } from "../Components/Navbar/NavBar";
import { UserContext } from "../Context/context";
import { Contact } from "./Contact";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { User } from "./User";

export const Middleware: React.FC = ({ children }) => {
  // const backgroundColor1: string = "#e5e5e5";
  const backgroundColor2: string = "#f8f9fa";

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: backgroundColor2 }}
    >
      <NavBar />
      {children}
      <div className="pt-5 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
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
        <Route path="/user">
          <Middleware>
            <User />
          </Middleware>
        </Route>
        <Route path="/covid">
          <Middleware>
            <CovidRouter />
          </Middleware>
        </Route>
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
