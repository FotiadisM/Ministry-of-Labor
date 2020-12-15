import React, { useState } from "react";

interface MenuItemProps {
  text: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const toggleHover = () => {
    setHovered((h) => !h);
  };
  return (
    <div
      className={"bg-primary " + (hovered ? "ps-2" : "")}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Tooltip on right"
    >
      <div className="bg-white ms-4 text-center">{text}</div>
    </div>
  );
};

const items: MenuItemProps[] = [
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
    <div className="shadow">
      {items.map((i) => {
        return <MenuItem key={i.href} text={i.text} href={i.href} />;
      })}
    </div>
  );
};
