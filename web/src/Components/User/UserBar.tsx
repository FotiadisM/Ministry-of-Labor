import React, { useContext } from "react";
import { UserContext } from "../../Context/context";

interface DropdownProps {
  title: string;
  routes: Route[];
  id: number;
}

const Dropdown: React.FC<DropdownProps> = ({ title, routes, id }) => {
  return (
    <li className="nav-item dropdown">
      <div
        className="nav-link dropdown-toggle"
        id={"userNavbarDropdown_" + id}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </div>
      <ul
        className="dropdown-menu"
        aria-labelledby={"userNavbarDropdown_" + id}
      >
        {routes.map((r) => {
          return (
            <li key={r.text}>
              <a className="dropdown-item" href={r.href}>
                {r.text}
              </a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const drops: DropdownProps[] = [
  {
    title: "Τα στοιχεία μου",
    routes: [{ text: "hasdf", href: "asdf" }],
    id: 1,
  },
  {
    title: "Ο οργανισμός μου",
    routes: [{ text: "hasdf", href: "asdf" }],
    id: 2,
  },
  {
    title: "Τα ραντεβού μου",
    routes: [
      { text: "Νέο ραντεβού", href: "asdf" },
      { text: "Ημερολόγιο", href: "asdf" },
    ],
    id: 3,
  },
  {
    title: "Αίτηση για Πιστωποιητικά",
    routes: [{ text: "hasdf", href: "asdf" }],
    id: 4,
  },
  { title: "Covid-19", routes: [{ text: "hasdf", href: "asdf" }], id: 5 },
];

interface UserBarProps {}

export const UserBar: React.FC<UserBarProps> = () => {
  const userContext = useContext(UserContext);
  const { userInfo } = userContext!;

  const userDrop: DropdownProps = {
    title: userInfo.user!.firstName + " " + userInfo.user!.lastName,
    routes: [{ text: "Αποσύνδεση", href: "asdf" }],
    id: 6,
  };

  return (
    <ul className="nav px-3 shadow">
      {drops.map((d) => {
        return (
          <Dropdown key={d.title} title={d.title} routes={d.routes} id={d.id} />
        );
      })}
      <div className="ms-auto">
        <Dropdown
          title={userDrop.title}
          routes={userDrop.routes}
          id={userDrop.id}
        />
      </div>
    </ul>
  );
};
