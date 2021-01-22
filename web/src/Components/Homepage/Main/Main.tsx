import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [text, setText] = useState<string>("");
  return (
    <div
      className="py-4 px-5 bg-primary shadow-lg"
      style={{ borderRadius: "10px" }}
    >
      <div className="mx-5 d-flex justify-content-between">
        <h2 className="text-white ms-5 fw-bolder my-auto fs-4">
          Βρείτε εύκολα και γρήγορα αυτό που ψάχνετε
        </h2>
        <form
          className="bg-white me-5 shadow-lg rounded-pill d-flex"
          style={{ width: "34%" }}
          id="searchBarForm"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Φόρμα αναζήτησης"
          title="Φόρμα αναζήτησης"
        >
          <input
            type="text"
            id="searchBar"
            className="form-control border-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Πληκτρολογήστε εδώ για αναζήτηση"
            aria-label="Πληκτρολογείστε εδω για αναζήτηση"
          />
          <div
            className="bg-warning rounded-pill"
            style={{ padding: "7px 10px", margin: "2px 2.5px 2px 0px" }}
          >
            <i className="bi bi-search m-auto p-0"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

interface PageLinkProps {
  text: string;
  id: string;
  changePage: (id: string) => void;
}

const PageLink: React.FC<PageLinkProps> = ({ text, id, changePage }) => {
  return (
    <li className="nav-item">
      <div
        id={"page" + id}
        className={
          "nav-link text-primary pageEl " + (id === "1" ? "active" : "")
        }
        onClick={() => changePage(id)}
      >
        {text}
      </div>
    </li>
  );
};

interface PageMenuOptionProps {
  text: string;
}

const PageMenuOption: React.FC<PageMenuOptionProps> = ({ text }) => {
  return (
    <div className="col">
      <button className="btn btn-outline-primary w-100">{text}</button>
    </div>
  );
};

export const Main: React.FC = () => {
  let history = useHistory();
  const [number, setPage] = useState<number>(1);

  const changePage = (id: string) => {
    const el = document.getElementsByClassName("pageEl");
    for (let i = 0; i < 3; i += 1) {
      el[i].classList.remove("active");
      el[i].classList.remove("shadow");
    }

    document.getElementById("page" + id.toString())?.classList.add("active");
    setPage(Number(id));
  };
  return (
    <div className="ps-5">
      <SearchBar />
      <div
        className="mt-5 py-4 text-light d-flex align-items-center"
        style={{ backgroundColor: "#255c99", borderRadius: "10px" }}
      >
        <h3 className="fw-bold ps-4 mb-0 me-5 fs-4">
          Μάθετε τα τελευταία νέα για τον COVID-19
        </h3>
        <button
          className="btn btn-primary me-2 bg-white text-primary fw-bold"
          onClick={() => history.push("/covid/employees")}
        >
          Covid και Εργαζόμενοι
        </button>
        <button
          className="btn btn-primary bg-white text-primary fw-bold"
          onClick={() => history.push("/covid/employer")}
        >
          Covid και Εργοδότες
        </button>
      </div>
      {/* BOOK DATE */}
      <div className="mt-5 d-flex ">
        <h4 className="m-0 my-auto me-5">
          Κλείστε ηλεκτρονικά ραντεβού και επισκεφθείτε το Υπουργείο
        </h4>
        <button
          className="btn btn-primary fw-bold pt-1 pb-2 px-3"
          onClick={() => history.push("/user/dates/new")}
        >
          <span className="my-auto">Υπηρεσία e-Ραντεβού</span>
          <i className="bi bi-arrow-right ms-2 fs-4"></i>
        </button>
      </div>
      {/* BOOK DATE -- END */}
      <div className="container-fluid mt-5 pe-4">
        <h5 className="pb-3">Γρήγορη Πρόσβαση</h5>
        <ul className="nav nav-tabs fw-bold" style={{ fontSize: "1.1rem" }}>
          <PageLink id="1" text="Εργαζόμενοι" changePage={changePage} />
          <PageLink id="2" text="Εργοδότες" changePage={changePage} />
          <PageLink id="3" text="Άνεργοι" changePage={changePage} />
          {/* <PageLink id="4" text="Συνταξιούχοι" changePage={changePage} /> */}
        </ul>
        {
          number === 1 ? (
            <MenuBox {...employ} />
          ) : number === 2 ? (
            <MenuBox {...employer} />
          ) : number === 3 ? (
            <MenuBox {...jobless} />
          ) : number === 4 ? null : null // <MenuBox {...old} />
        }
      </div>
    </div>
  );
};

const employer = {
  serv: [
    "Προσλήψεις / Απολύσεις",
    "Δήλωση ενσήμων",
    "Δήλωση εργαζομένων",
    "Δήλωση αναστολής εργασίας",
    "Αίτημα για Επιστρεπτέα Προκαταβολή",
    "Αίτημα για έκπτωση ενοικίου επιχείρησης",
  ],
  inf: [
    "Μέτρα στήριξης επιχειρήσεων",
    "Οδηγίες εφαρμογής μέτρων πρόληψης",
    "Υπηρεσίας Click Away",
  ],
};
const employ = {
  serv: [
    "Άδεις / Υπόλοιπο αδειών",
    "Άδεια ειδικού σκοπού",
    "Εύρεση δικαιούχου επιδόματος ειδικού σκοπού",
  ],
  inf: [
    "Εργασιακά δικαιώματα",
    "Ασφαλιστικοί Φορείς",
    "Αποζημειώσεις",
    "Εργασιακά δικαιώματα",
  ],
};
const jobless = {
  serv: ["Προγράμματα προσάρτησης", "Προγράμματα ΕΣΠΑ"],
  inf: ["Πρόσληψη ανέργων με επιδότηση", "Προγράμματα κατάρτησης"],
};

interface MenuBoxProps {
  serv: string[];
  inf: string[];
}

const MenuBox: React.FC<MenuBoxProps> = ({ serv, inf }) => {
  return (
    <div className="mt-5 d-flex justify-content-around">
      <div className="" style={{ width: "45%" }}>
        <h4 className="fw-bold">Υπηρεσίες</h4>
        <div
          className="shadow-lg bg-white p-4 ps-5"
          style={{ borderRadius: "24px" }}
        >
          <div className="row row-cols-2 g-2">
            {serv.map((s, i) => {
              return <PageMenuOption text={s} key={i} />;
            })}
          </div>
        </div>
      </div>
      <div className="" style={{ width: "45%" }}>
        <h4 className="fw-bold">Πληροφορίες</h4>
        <div
          className="shadow-lg bg-white p-4 ps-5"
          style={{ borderRadius: "24px" }}
        >
          <div className="row row-cols-2 g-2">
            {inf.map((s, i) => {
              return <PageMenuOption text={s} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
