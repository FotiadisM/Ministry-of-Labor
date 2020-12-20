import React from "react";
import { useHovered } from "../../../Hooks/hooks";

const MenuItem: React.FC<Route> = ({ text }) => {
  const [hovered, toggleHovered] = useHovered();

  return (
    <div
      className={"bg-primary " + (hovered ? "ps-3" : "")}
      onMouseEnter={toggleHovered}
      onMouseLeave={toggleHovered}
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Tooltip on right"
    >
      <div className="bg-white ms-4 text-center py-2">{text}</div>
    </div>
  );
};

const items: Route[] = [
  { text: "Υπουργείο", href: "#" },
  { text: "Νομοθεσία", href: "#" },
  { text: "e-Βιβλιοθήκη", href: "#" },
  { text: "Προνοιακά", href: "#" },
  { text: "Κοινωνική Προστασία", href: "#" },
  { text: "Διεθνή", href: "#" },
  { text: "Για Ασφαλισμένους", href: "#" },
  { text: "Για Εργοδότες", href: "#" },
];

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  return (
    <div className="bg-white shadow-lg rounded-end pe-1">
      {items.map((i, index) => {
        return <MenuItem key={index} text={i.text} href={i.href} />;
      })}
    </div>
  );
};
