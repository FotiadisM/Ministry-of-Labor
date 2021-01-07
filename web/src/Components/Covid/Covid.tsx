import React from "react";
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
                  <a href={"#" + i.href}>{i.text}</a>
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

interface CovidBoxProps {
  info: Route;
}

const CovidBox: React.FC<CovidBoxProps> = ({ info }) => {
  return (
    <div id={info.href} className="rounded border shadow p-4 mt-5">
      <h4>{info.text}</h4>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem
      </p>
    </div>
  );
};

const workplace: CovidMenuProps = {
  title: "Covid-19 και όσα αφορούν τον χώρο εργασίας",
  info: [
    { text: "Απαραίτητα μέτρα πρόλήψης", href: "cw1" },
    { text: "Οδηγίες σε περίπτωση εμφάνισης κρούσματος", href: "cw2" },
    {
      text: "Γενικές οδηγίες για καθαρισμό και απολύμανση των εργασιακών χώρων",
      href: "cw3",
    },
  ],
  services: [{ text: "Δήλωση κρούσματος", href: "" }],
};

const employer: CovidMenuProps = {
  title: "Covid-19 και όσα αφορούν τους Εργοδότες",
  info: [
    { text: "Απαραίτητα μέτρα πρόλήψης", href: "cb1" },
    { text: "Οδηγίες σε περίπτωση εμφάνισης κρούσματος", href: "cb2" },
    {
      text: "Γενικές οδηγίες για καθαρισμό και απολύμανση των εργασιακών χώρων",
      href: "cb3",
    },
  ],
  services: [{ text: "Δήλωση κρούσματος", href: "" }],
};

const employees: CovidMenuProps = {
  title: "Covid-19 και όσα αφορούν τους Εργαζομένους",
  info: [
    { text: "Απαραίτητα μέτρα πρόλήψης", href: "cs1" },
    { text: "Οδηγίες σε περίπτωση εμφάνισης κρούσματος", href: "cs2" },
    {
      text: "Γενικές οδηγίες για καθαρισμό και απολύμανση των εργασιακών χώρων",
      href: "cs3",
    },
  ],
  services: [{ text: "Δήλωση κρούσματος", href: "" }],
};

export const CovidRouter: React.FC = () => {
  return (
    <div className="py-5">
      <Switch>
        <ReactRoute exact path="/covid/workplace">
          <CovidMenu {...workplace} />
          <div className="container">
            {workplace.info.map((i, index) => {
              return <CovidBox key={index} info={i} />;
            })}
          </div>
        </ReactRoute>
        <ReactRoute exact path="/covid/employer">
          <CovidMenu {...employer} />
          <div className="container">
            {employer.info.map((i, index) => {
              return <CovidBox key={index} info={i} />;
            })}
          </div>
        </ReactRoute>
        <ReactRoute exact path="/covid/employees">
          <CovidMenu {...employees} />
          <div className="container">
            {employees.info.map((i, index) => {
              return <CovidBox key={index} info={i} />;
            })}
          </div>
        </ReactRoute>
      </Switch>
    </div>
  );
};
