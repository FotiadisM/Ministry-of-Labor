import React from "react";
import { Main } from "../../Components/Homepage/Main/Main";
import { MiddlePage } from "../../Components/Homepage/Main/MiddlePage";
import { SideBar } from "../../Components/Homepage/SideBar/SideBar";

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
      <div className="pb-5 pt-3">
        <MiddlePage />
      </div>
    </main>
  );
};
