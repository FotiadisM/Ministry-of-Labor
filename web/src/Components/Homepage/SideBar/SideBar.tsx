import React from "react";
import { Menu } from "./Menu";

interface Props {}

export const SideBar: React.FC<Props> = () => {
  return (
    <div>
      <Menu />
    </div>
  );
};
