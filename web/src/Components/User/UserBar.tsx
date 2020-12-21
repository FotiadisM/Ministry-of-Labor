import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
              <NavLink
                className="dropdown-item"
                to={r.href}
                activeClassName="active"
                exact
              >
                {r.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const drops: DropdownProps[] = [
  {
    id: 1,
    title: "Τα στοιχεία μου",
    routes: [
      { text: "Το προφίλ μου", href: "/user/profile" },
      { text: "Τα ένσημά μου", href: "/user/profile/stamps" },
    ],
  },
  {
    id: 2,
    title: "Ο οργανισμός μου",
    routes: [{ text: "hasdf", href: "asdf" }],
  },
  {
    id: 3,
    title: "Τα ραντεβού μου",
    routes: [
      { text: "Νέο ραντεβού", href: "/user/dates/new" },
      { text: "Ημερολόγιο", href: "/user/dates" },
    ],
  },
  {
    id: 4,
    title: "Αίτηση για Πιστωποιητικά",
    routes: [{ text: "hasdf", href: "asdf" }],
  },
  {
    id: 5,
    title: "Covid-19",
    routes: [{ text: "hasdf", href: "asdf" }],
  },
];

interface UserBarProps {}

export const UserBar: React.FC<UserBarProps> = () => {
  const userContext = useContext(UserContext);
  const { userInfo, setUserInfo } = userContext!;

  let history = useHistory();
  const LogOut = () => {
    setUserInfo((s) => {
      return { isLogedIn: false, user: null };
    });
    history.push("/");
  };

  return (
    <ul className="nav px-3 shadow">
      {drops.map((d) => {
        return (
          <Dropdown key={d.title} title={d.title} routes={d.routes} id={d.id} />
        );
      })}
      <div className="ms-auto">
        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            id="userNavbarDropdownUser"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {userInfo.user!.firstName + " " + userInfo.user!.lastName}
          </div>
          <ul
            className="dropdown-menu"
            aria-labelledby="userNavbarDropdownUser"
          >
            <li>
              <div className="dropdown-item" onClick={() => LogOut()}>
                Αποσύνδεση
                <i className="bi bi-arrow-bar-right fs-5 ps-2"></i>
              </div>
            </li>
          </ul>
        </li>
      </div>
    </ul>
  );
};
