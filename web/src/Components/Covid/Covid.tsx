import React from "react";
import { NavLink, Route as ReactRoute, Switch } from "react-router-dom";

// const workplace = {
//   title: "Covid-19 και όσα αφορούν τον χώρο εργασίας",
//   info: [
//     { text: "Απαραίτητα μέτρα πρόληψης", href: "cw1" },
//     { text: "Οδηγίες σε περίπτωση εμφάνισης κρούσματος", href: "cw2" },
//     {
//       text: "Γενικές οδηγίες για καθαρισμό και απολύμανση των εργασιακών χώρων",
//       href: "cw3",
//     },
//   ],
//   services: [{ text: "Δήλωση κρούσματος", href: "" }],
// };

const employer: { info: Category[]; services: Category[] } = {
  info: [
    {
      title: "Μέτρα πρόληψης",
      elements: [
        { text: "Οδηγίες εφαρμογής μέτρων πρόληψης", href: "cb1" },
        { text: "Οδηγίες σε περίπτωση εμφάνισης κρούσματος", href: "cb2" },
        {
          text:
            "Γενικές οδηγίες για καθαρισμό και απολύμανση των εργασιακών χώρων",
          href: "cb3",
        },
      ],
    },
    {
      title: "Οικονομικά μέτρα",
      elements: [{ text: "Μέτρα στήριξης επιχειρήσεων", href: "cb4" }],
    },
    {
      title: "Σχετικά με το ",
      elements: [
        { text: "Ευέλικτοι τρόποι εργασίας", href: "cb5" },
        {
          text:
            "Αναστολές Συμβάσεων Εργασίας, Συν-Εργασία - Μονομερείς - Ειδικές Κατηγορίες",
          href: "cb6",
        },
        { text: "Άδειες Ειδικού Σκοπού", href: "cb7" },
      ],
    },
  ],
  services: [
    {
      title: "Γενικές υπηρεσίες υγείας",
      elements: [
        {
          text:
            "Αίτημα για προγραμματισμό ελέγχων (rapid test) στην επιχείρηση",
          href: "/",
        },
        {
          text: "Αίτημα για μαζικό εμβολιασμό εργαζομένων",
          href: "/",
        },
      ],
    },
    {
      title: "Οικονομικές υπηρεσίες",
      elements: [
        {
          text: "Αίτημα για Επιστρεπτέα Προκαταβολή",
          href: "/",
        },
        {
          text: "Αίτημα για έκπτωση ενοικίου επιχείρησης",
          href: "/",
        },
        {
          text: "Αίτημα για αναστολή φορολογικών υποχρεώσεων",
          href: "/",
        },
      ],
    },
    {
      title: "Δηλώσεις τροποποίησης συμβάσεων",
      elements: [
        {
          text: "Υποβολή δηλώσεων αναστολών/τροποποιήσεων συμβάσεων εργασίας",
          href: "/organization/employees/forms/suspension",
        },
        {
          text: "Υποβολή δηλώσεων τηλεργασίας",
          href: "/organization/employees/forms/remote",
        },
      ],
    },
  ],
};

const employees: { info: Category[]; services: Category[] } = {
  info: [
    {
      title: "Μέτρα πρόληψης",
      elements: [
        { text: "Απαραίτητα μέτρα πρόληψης", href: "cs1" },
        { text: "Οδηγίες σε περίπτωση εμφάνισης κρούσματος", href: "cs2" },
      ],
    },
    {
      title: "Οικονομικά μέτρα",
      elements: [
        {
          text: "Δικαιούμαι επίδομα ειδικού σκοπού;",
          href: "cs3",
        },
      ],
    },
    {
      title: "Εργασιακά δικαιώματα",
      elements: [
        {
          text: "Δικαιώματα εργαζομένων",
          href: "cs4",
        },
        {
          text: "Δικαιώματα εργαζομένων κατα την τηλεργασία",
          href: "cs5",
        },
      ],
    },
  ],
  services: [
    {
      title: "Γενικές υπηρεσίες υγείας",
      elements: [
        {
          text: "Υπηρεσία βαθμολόγησης με άριστα στην εργασία",
          href: "/",
        },
      ],
    },
    {
      title: "Οικονομικές υπηρεσίες",
      elements: [
        {
          text: "Αίτημα για έκπτωση ενοικίου πληττόμενου εργαζόμενου",
          href: "/",
        },
        {
          text: "Εύρεση δικαιούχου επιδόματος ειδικού σκοπού",
          href: "/",
        },
      ],
    },
    {
      title: "Βεβαιώσεις και άδειες",
      elements: [
        {
          text: "Εύρεση βεβαίωσης κίνησης",
          href: "/",
        },
        {
          text: "Φόρμα  άδειας ειδικού σκοπού",
          href: "/user/forms/timeOff/special",
        },
      ],
    },
  ],
};

const CovidBox: React.FC<{ info: Route }> = ({ info }) => {
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

interface Category {
  title: string;
  elements: Route[];
}

interface MenuProps {
  title: string;
  categories: Category[];
  reh?: boolean;
}

const Menu: React.FC<MenuProps> = ({ title, categories, reh }) => {
  return (
    <div className="mt-4" style={{ width: "45%" }}>
      <h4 className="text-primary fw-bold">{title}</h4>
      <div
        className="border shadow bg-white p-4 ps-5"
        style={{ borderRadius: "4%" }}
      >
        {categories.map((c, i) => {
          return (
            <div key={i}>
              <h4>{c.title}</h4>
              <ul>
                {c.elements.map((e, index) => {
                  return (
                    <li key={index}>
                      {reh === undefined ? (
                        <a href={"#" + e.href}>{e.text}</a>
                      ) : (
                        <NavLink to={e.href}>{e.text}</NavLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface CovidPageProps {
  title: string;
  info: Category[];
  services: Category[];
}

const CovidPage: React.FC<CovidPageProps> = ({ title, info, services }) => {
  return (
    <div>
      <h2>{title}</h2>
      <hr />
      <div className="d-flex justify-content-around">
        <Menu title={"Πληροφορίες"} categories={info} />
        <Menu title={"Υπηρεσίες"} categories={services} reh={true} />
      </div>
      {info.map((c) => {
        return c.elements.map((e) => {
          return <CovidBox key={e.href} info={e} />;
        });
      })}
    </div>
  );
};

export const CovidRouter: React.FC = () => {
  return (
    <div className="container py-5">
      <Switch>
        {/* <ReactRoute exact path="/covid/workplace"> */}
        {/* <CovidPage /> */}
        {/* </ReactRoute> */}
        <ReactRoute exact path="/covid/employer">
          <CovidPage
            title="Covid-19 και όσα αφορούν τους Εργοδότες"
            info={employer.info}
            services={employer.services}
          />
        </ReactRoute>
        <ReactRoute exact path="/covid/employees">
          <CovidPage
            title="Covid-19 και όσα αφορούν τους Εργαζομένους"
            info={employees.info}
            services={employees.services}
          />
        </ReactRoute>
      </Switch>
    </div>
  );
};
