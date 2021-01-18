import React from "react";
import { useHistory } from "react-router-dom";

const routes: Route[] = [
  // { text: "Χώρος Εργασίας", href: "/covid/workplace", status: "" },
  { text: "Covid και Εργαζόμενοι", href: "/covid/employees", status: "" },
  { text: "Covid και Εργοδότες", href: "/covid/employer", status: "" },
];

interface Props {}

export const Covid: React.FC<Props> = () => {
  let history = useHistory();

  return (
    <nav
      className="container-fluid"
      // style={{ backgroundColor: "green" }}
    >
      <div className="row py-2 px-4">
        <div className="col my-auto fw-bolder tex">
          Μάθετε τα τελευταία νέα για τον COVID-19
        </div>
        {routes.map((r) => {
          return (
            <button
              key={r.href}
              className="col-auto btn text-white border border-white p-1 mx-2 px-2"
              onClick={() => history.push(r.href)}
            >
              {r.text}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
