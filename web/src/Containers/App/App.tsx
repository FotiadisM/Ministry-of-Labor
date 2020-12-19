import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { NavBar } from "../../Components/Navbar/NavBar";
import { Contact } from "../Contact/Contact";
import { Homepage } from "../Homepage/Homepage";

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
  return (
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
      <Route path="/">
        <h4>404, the page you are trying to reach doesn't exist</h4>
      </Route>
    </Switch>
  );
}

export default App;
