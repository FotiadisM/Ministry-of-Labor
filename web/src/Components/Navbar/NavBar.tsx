import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/context";
import { UserBar } from "../User/UserBar";
import { Covid } from "./Covid";

const NavItem: React.FC<Route> = ({ text, status, href }) => {
  return (
    <li className="nav-item">
      <NavLink
        className={"nav-link fw-bold"}
        to={href}
        activeClassName="active"
        exact={true}
      >
        {text}
      </NavLink>
    </li>
  );
};

const routes: Route[] = [
  { text: "Αρχική", href: "/", status: "active" },
  { text: "Σχετικά με εμάς", href: "/about", status: "" },
  { text: "Επικοινωνία", href: "/contact", status: "" },
  { text: "Σύνδεση μέσω Taxis Net", href: "/login", status: "" },
];

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const userInfo = useContext(UserContext);

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light flex-row-reverse px-4"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container-fluid">
          <div className="navbar-brand fw-bold">
            Υπουργείο Εργασίας & Κοινωνικών Υποθέσεων
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {routes.map((r) => {
                return (
                  <NavItem
                    key={r.href}
                    text={r.text}
                    status={r.status}
                    href={r.href}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <Covid />
      {userInfo.isLogedIn ? <UserBar /> : ""}
    </header>
  );
};
