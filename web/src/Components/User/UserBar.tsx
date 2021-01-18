import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Context/context";

interface DropdownProps {
  title: string;
  routes: Route[];
  routes2: Route[];
  id: number;
}

const Dropdown: React.FC<DropdownProps> = ({ title, routes, routes2, id }) => {
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
        {routes2.length !== 0 ? (
          <li>
            <hr className="mx-4" />
          </li>
        ) : null}
        {routes2.length !== 0
          ? routes2.map((r) => {
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
            })
          : null}
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
      { text: "Ο οργανισμός μου", href: "/user/organization" },
    ],
    routes2: [],
  },
  {
    id: 2,
    title: "Ο οργανισμός μου",
    routes: [
      { text: "Στοιχεία", href: "/organization/profile" },
      { text: "Ανθρώπινο δυναμικό", href: "/organization/employees" },
    ],
    routes2: [{ text: "asdf", href: "asdf" }],
  },
  {
    id: 3,
    title: "Τα ραντεβού μου",
    routes: [
      { text: "Νέο ραντεβού", href: "/user/dates/new" },
      { text: "Τα ραντεβού μου", href: "/user/dates" },
    ],
    routes2: [],
  },
  {
    id: 4,
    title: "Αίτηση για Πιστoποιητικά",
    routes: [{ text: "hasdf", href: "asdf" }],
    routes2: [],
  },
  {
    id: 5,
    title: "Covid-19",
    routes: [{ text: "hasdf", href: "asdf" }],
    routes2: [],
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

  let isOwner = false;
  if (userInfo.user !== null) {
    if (userInfo.user.employmentInfo !== null) {
      isOwner = userInfo.user.employmentInfo.isOwner;
    }
  }

  return (
    <ul className="nav px-3 shadow">
      {drops.map((d) => {
        if (!isOwner && d.id === 2) {
          return undefined;
        }
        return <Dropdown key={d.title} {...d} />;
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
