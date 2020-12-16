import React from "react";
import { LinksMenu } from "./LinksMenu";
import { Menu } from "./Menu";

interface Props {}

export const SideBar: React.FC<Props> = () => {
  return (
    <div className="row gx-0 gy-5">
      <div className="col-12">
        <Menu />
      </div>
      <div className="col-12">
        <LinksMenu />
      </div>
    </div>
  );
};
