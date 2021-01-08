import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Context/context";
import { useHovered } from "../Hooks/hooks";
import { LogInAPI } from "../APIs/auth";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  let history = useHistory();
  const [hovered, toggleHovered] = useHovered();

  const [input, setInput] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const userContext = useContext(UserContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const res = LogInAPI(input.username, input.password);

    if (res != null) {
      userContext!.setUserInfo(res);
      history.push("/");
    }
  };

  return (
    <div className="container position-relative">
      {/* <button
        className="position-absolute btn btn-primary"
        style={{
          top: "60px",
          left: "45px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <i className="bi bi-arrow-left fs-5"></i>
        <span className="fs-6 ps-2 my-auto">Αρχική</span>
      </button> */}
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
