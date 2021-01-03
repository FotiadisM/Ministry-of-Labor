import React, { useState } from "react";
import { Route as ReactRoute, Switch, NavLink } from "react-router-dom";

interface CovidMenuProps {
  title: string;
  info: Route[];
  services: Route[];
}

const CovidMenu: React.FC<CovidMenuProps> = ({ title, info, services }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <hr />
      <div className="d-flex bg-white border rounded p-3 shadow">
        <div className="container-fluid">
          <h4>Πληροφορίες</h4>
          <ul className="list-group list-group-flush">
            {info.map((i, index) => {
              return (
                <li key={index} className="list-group-item">
                  <NavLink to={i.href} activeClassName="active">
                    {i.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container-fluid">
          <h4>Υπηρεσίες</h4>
          <ul className="list-group list-group-flush">
            {services.map((s, index) => {
              return (
                <li key={index} className="list-group-item">
                  <NavLink to={s.href} activeClassName="active">
                    {s.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const workplace: CovidMenuProps = {
  title: "Covid-19 στον χώρο εργασίας",
  info: [
    { text: "Απαραίτητα μέτρα πρόλήψης", href: "" },
    { text: "Οδηγίες σε περίπτωση εμφάνισης κρούσματος", href: "" },
    {
      text: "Γενικές οδηγίες για καθαρισμό και απολύμανση των εργασιακών χώρων",
      href: "",
    },
  ],
  services: [{ text: "Δήλωση κρούσματος", href: "" }],
};

export const CovidRouter: React.FC = () => {
  const [category, setCategory] = useState<CovidMenuProps>(workplace);

  return (
    <div className="py-5">
      <Switch>
        <ReactRoute exact path="/covid/workplace">
          <CovidMenu {...workplace} />
        </ReactRoute>
        {/* <Route exact path="covid/employer">
        <CovidMenu
          title={category.title}
          info={category.info}
          services={category.services}
        />
      </Route> */}
        {/* <Route exact path="covid/employees">
        <CovidMenu
          title={category.title}
          info={category.info}
          services={category.services}
        />
      </Route> */}
      </Switch>
    </div>
  );
};
