import React from "react";

const MenuLink: React.FC<Route> = ({ text, href }) => {
  return (
    <li>
      <a className="link-primary fw-bolder" href={href}>
        {text}
      </a>
    </li>
  );
};

const routes: Route[] = [
  {
    text: "ΕΦΚΑ",
    href: "https://www.efka.gov.gr/el",
  },
  {
    text: "ΕΡΓΑΝΗ",
    href:
      "https://eservices.yeka.gr/(S(3oldwsttfcpwjboh2jyxsnv0))/login.aspx?ReturnUrl=%2f",
  },
  { text: "Δι@ύγεια", href: "https://diavgeia.gov.gr/" },
  { text: "Κοινωνικό Εισόδημα Αλληλεγγύης", href: "/123412" },
];

interface LinksMenuProps {}

export const LinksMenu: React.FC<LinksMenuProps> = () => {
  return (
    <div className="container bg-white py-3 shadow rounded-end">
      <div className="row">
        {routes.map((r) => {
          return (
            <div className="col-12 px-5" key={r.href}>
              <ul>
                <MenuLink text={r.text} href={r.href} />
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
