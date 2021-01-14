import React from "react";
import { Main } from "../Components/Homepage/Main/Main";
import { MiddlePage } from "../Components/Homepage/Main/MiddlePage";
import { NewsList } from "../Components/Homepage/Main/NewsList";
import { SideBar } from "../Components/Homepage/SideBar/SideBar";

interface Props {}

export const Homepage: React.FC<Props> = () => {
  return (
    <main className="container-fluid p-0 mt-4">
      <div className="row g-0 pb-2">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col">
          <Main />
        </div>
      </div>
      <hr className="w-75" style={{ height: "2px", margin: "3rem auto" }} />
      <div className="container py-5">
        <div className="row g-0 justify-content-around px-4">
          <div className="col" style={{ maxWidth: "47%" }}>
            <NewsList title="Δελτία τύπου" />
          </div>
          <div className="col" style={{ maxWidth: "47%" }}>
            <NewsList title="Νέα - Ανακοινώσεις" />
          </div>
        </div>
      </div>
      <div className="pb-5 pt-3">
        <MiddlePage />
      </div>
    </main>
  );
};
