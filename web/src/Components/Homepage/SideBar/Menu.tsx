import React from "react";
import { useHovered } from "../../../Hooks/hooks";

const MenuItem: React.FC<Route> = ({ text }) => {
  const [hovered, toggleHovered] = useHovered();

  return (
    <div
      className="d-flex"
      onMouseEnter={toggleHovered}
      onMouseLeave={toggleHovered}
    >
      <div
        className="py-4"
        style={{
          backgroundColor: "#255c99",
          width: hovered ? "15%" : "7%",
          borderRadius: hovered ? "0px 10px 10px 0" : "",
        }}
      ></div>
      <div
        className={
          "bg-white ms-4 text-center py-2 " +
          (hovered ? "fw-bold text-primary" : "")
        }
        style={{ flexGrow: 1 }}
      >
        {text}
      </div>
    </div>
    // <div
    //   className={" " + (hovered ? "ps-3" : "")}
    //   style={{ backgroundColor: "#255c99" }}
    //   onMouseEnter={toggleHovered}
    //   onMouseLeave={toggleHovered}
    //   data-bs-toggle="tooltip"
    //   data-bs-placement="right"
    //   title="Tooltip on right"
    // >
    //   <div
    //     className={
    //       "bg-white ms-4 text-center py-2 " +
    //       (hovered ? "fw-bold text-primary" : "")
    //     }
    //     style={{ borderRadius: hovered ? "50px 0 0 50px" : "" }}
    //   >
    //     {text}
    //   </div>
    // </div>
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
    <div
      className="bg-white shadow-lg pe-2"
      style={{ borderRadius: "0 10px 10px 0" }}
    >
      {items.map((i, index) => {
        return <MenuItem key={index} text={i.text} href={i.href} />;
      })}
    </div>
  );
};
