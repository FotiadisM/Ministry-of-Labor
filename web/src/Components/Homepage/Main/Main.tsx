import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="py-4 px-5 bg-primary shadow-lg rounded-start">
      <div className="mx-5 d-flex justify-content-between">
        <h4 className="text-white ms-5 fw-bolder my-auto">
          Βρείτε εύκολα και γρήγορα αυτό που ψάχνετε
        </h4>
        <form
          className="bg-white me-5 shadow-lg rounded-pill d-flex"
          style={{ width: "34%" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="form-control border-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Πληκτρολογήστε εδώ για αναζήτηση"
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
  const [page, setPage] = useState<number>(1);

  const changePage = (id: string) => {
    const el = document.getElementsByClassName("pageEl");
    for (let i = 0; i < 4; i += 1) {
      el[i].classList.remove("active");
      el[i].classList.remove("shadow");
    }

    document.getElementById("page" + id.toString())?.classList.add("active");
    setPage(Number(id));
  };
  return (
    <div className="ps-5">
      <SearchBar />
      <div className="mt-5 d-flex justify-content-center">
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
      <div className="container-fluid mt-5 pe-4">
        <ul className="nav nav-tabs fw-bold">
          <PageLink id="1" text="Εργαζόμενοι" changePage={changePage} />
          <PageLink id="2" text="Εργοδότες" changePage={changePage} />
          <PageLink id="3" text="Άνεργοι" changePage={changePage} />
          <PageLink id="4" text="Συνταξιούχοι" changePage={changePage} />
        </ul>
        <div className="mt-5 d-flex justify-content-around">
          <div className="" style={{ width: "45%" }}>
            <h4 className="fw-bold">Πληροφορίες</h4>
            <div
              className="border shadow-lg bg-white p-4 ps-5"
              style={{ borderRadius: "5%" }}
            >
              <div className="row row-cols-2 g-2">
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
              </div>
            </div>
          </div>
          <div className="" style={{ width: "45%" }}>
            <h4 className="fw-bold">Υπηρεσίες</h4>
            <div
              className="border shadow-lg bg-white p-4 ps-5"
              style={{ borderRadius: "5%" }}
            >
              <div className="row row-cols-2 g-2">
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
                <PageMenuOption text="asdsfg" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row g-0 justify-content-around px-4">
          <div className="col" style={{ maxWidth: "42%" }}>
            <NewsList title="Δελτία τύπου" />
          </div>
          <div className="col" style={{ maxWidth: "42%" }}>
            <NewsList title="Νέα - Ανακοινώσεις" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
