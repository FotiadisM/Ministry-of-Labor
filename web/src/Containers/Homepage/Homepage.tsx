import React from "react";
import { Main } from "../../Components/Homepage/Main/Main";
import { SideBar } from "../../Components/Homepage/SideBar/SideBar";

interface Props {}

export const Homepage: React.FC<Props> = () => {
  return (
    <main className="container-fluid p-0 mt-4">
      <div className="row g-0">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col">
          <Main />
        </div>
      </div>
      <hr className="mx-5" style={{ height: "2px" }} />
    </main>
  );
};
