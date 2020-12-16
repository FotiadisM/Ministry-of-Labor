import React from "react";

const routes: Route[] = [
  { text: "Χώρος Εργασίας", href: "/covid/workplace", status: "" },
  { text: "Εργαζόμενοι", href: "/covid/employees", status: "" },
  { text: "Εργοδότες", href: "/covid/employers", status: "" },
];

interface Props {}

export const Covid: React.FC<Props> = () => {
  return (
    <nav className="container-fluid bg-dark text-white">
      <div className="row py-2 px-4">
        <div className="col my-auto fw-bolder">
          Μάθετε τα τελευταία νέα για τον COVID-19
        </div>
        {routes.map((r) => {
          return (
            <button
              key={r.href}
              className="col-auto btn text-white border border-white p-1 mx-2"
            >
              {r.text}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
