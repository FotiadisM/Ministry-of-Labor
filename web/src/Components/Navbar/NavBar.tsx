import React from "react";
import { Covid } from "./Covid";

const NavItem: React.FC<Route> = ({ text, status, href }) => {
  return (
    <li className="nav-item">
      {/* {The extra space gap is needed here} */}
      <a className={"nav-link fw-bold " + status} href={href}>
        {text}
      </a>
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
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light flex-row-reverse px-4"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            Υπουργείο Εργασίας & Κοινωνικών Υποθέσεων
          </a>
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
    </header>
  );
};
