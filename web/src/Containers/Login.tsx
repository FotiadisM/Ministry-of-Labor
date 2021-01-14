import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../Context/context";
import { useHovered } from "../Hooks/hooks";
import { LogInAPI } from "../APIs/auth";

export const Login: React.FC = () => {
  const [hovered, toggleHovered] = useHovered();
  let history = useHistory();
  let location = useLocation<{ from: string }>();
  const { from } = location.state || { from: "/" };

  const [input, setInput] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const userContext = useContext(UserContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const res = LogInAPI(input.username, input.password);

    if (res != null) {
      userContext!.setUserInfo(res);
      history.push(from);
    }
  };

  return (
    <div className="container">
      <div className="py-5 my-5 mx-auto" style={{ width: "30%" }}>
        <h2 className="text-center text-primary mb-4">Σύνδεση μέσω Taxisnet</h2>
        <div
          className="border p-4 shadow mx-auto"
          style={{ borderRadius: "1.6rem" }}
        >
          <form onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="usernameLogin" className="form-label">
              Όνομα χρήστη
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameLogin"
              aria-describedby="usernameHelp"
              autoComplete="username"
              value={input.username}
              onChange={(e) => {
                setInput((i) => {
                  return {
                    ...i,
                    username: e.target.value,
                  };
                });
              }}
            />
            <label htmlFor="passwordLogin" className="form-label mt-4">
              Κωδικός χρήστη
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordLogin"
              autoComplete="password"
              value={input.password}
              onChange={(e) => {
                setInput((i) => {
                  return {
                    ...i,
                    password: e.target.value,
                  };
                });
              }}
            />
            <div
              className={
                "text-primary fst-italic mt-2 " +
                (hovered ? "text-decoration-underline" : "")
              }
              style={{ cursor: "pointer" }}
              onMouseEnter={toggleHovered}
              onMouseLeave={toggleHovered}
            >
              Ξεχάσατε το όνομα χρήστη ή τον κωδικό;
            </div>
            <button className="btn btn-primary w-100 mt-4" type="submit">
              Είσοδος
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
