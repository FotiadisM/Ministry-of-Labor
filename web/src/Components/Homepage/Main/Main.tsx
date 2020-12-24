import React, { useState } from "react";
import { NewsList } from "./NewsList";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [text, setText] = useState<string | undefined>(undefined);
  return (
    <div className="py-4 px-5 bg-primary shadow-lg rounded-start">
      <div className="mx-5 d-flex justify-content-between">
        <h4 className="text-white ms-5 fw-bolder my-auto">
          Βρείτε εύκολα και γρήγορα αυτό που ψάχνετε
        </h4>
        <form
          className="bg-white me-5 shadow-lg rounded-pill d-flex"
          style={{ width: "34%" }}
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

interface MainProps {}

export const Main: React.FC<MainProps> = () => {
  return (
    <div className="ps-5">
      <SearchBar />
      <div className="container-fluid mt-5">
        <div className="row g-0 justify-content-around px-4">
          <div className="col" style={{ maxWidth: "42%" }}>
            <NewsList title="Δελτία τύπου" />
          </div>
          <div className="col" style={{ maxWidth: "42%" }}>
            <NewsList title="Νέα - Ανακοινώσεις" />
          </div>
        </div>
      </div>
    </div>
  );
};
