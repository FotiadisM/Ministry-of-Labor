import React from "react";
import { SideBar } from "../../Components/Homepage/SideBar/SideBar";

interface Props {}

export const Homepage: React.FC<Props> = () => {
  return (
    <div className="container-fluid p-0 mt-4">
      <div className="row gy-0 gx-4">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col">main</div>
      </div>
    </div>
  );
};
