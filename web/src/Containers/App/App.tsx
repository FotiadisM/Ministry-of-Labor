import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar } from "../../Components/Navbar/NavBar";
import { Homepage } from "../Homepage/Homepage";

export const Middleware: React.FC = ({ children }) => {
  // const backgroundColor1: string = "#e5e5e5";
  const backgroundColor2: string = "#f8f9fa";

  return (
    <div className="App" style={{ backgroundColor: backgroundColor2 }}>
      <NavBar />
      {children}
      <footer className="text-center">footer</footer>
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
      <Route exact path="/hello">
        <h1>wtf?</h1>
      </Route>
      <Route path="/">
        <h4>404, the page you are trying to reach doesn't exist</h4>
      </Route>
    </Switch>
  );
}

export default App;
