import React, { useState, useContext } from "react";
import { updateUser } from "../../../APIs/auth";
import { UserContext } from "../../../Context/context";

interface InfoFieldProps {
  text: string;
  value: string;
  readOnly: boolean;
  type?: string;
  pattern?: string;
  onChange: (v: string) => void;
}

export const InfoField: React.FC<InfoFieldProps> = ({
  text,
  value,
  readOnly,
  type,
  pattern,
  onChange,
}) => {
  let t: string = "text";
  if (type !== undefined) {
    t = text;
  }
  return (
    <div className="col">
      <span>{text}</span>
      <input
        type={t}
        className="form-control"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        pattern={pattern}
        readOnly={readOnly}
        required
      />
    </div>
  );
};

export const UserProfile: React.FC = () => {
  const userContext = useContext(UserContext);
  const { userInfo, setUserInfo } = userContext!;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const f = document.getElementById("userInfoUpdateFrom") as HTMLFormElement;

    if (f.checkValidity()) {
      await updateUser(userInfo.user!);
    }
    f.classList.add("was-validated");
  };

  const [readOnly, setReadOnly] = useState<boolean>(true);
  return (
    <div className="container my-5">
      <div className="pb-4">
        <h2 className="fst-italic">
          <i
            className="bi bi-person-fill pe-4"
            style={{ fontSize: "2.5rem" }}
          ></i>
          {userInfo.user!.firstName + " " + userInfo.user!.lastName}
        </h2>
        <hr />
      </div>
      <div className="my-2">
        <div className="d-flex justify-content-between">
          <h4>Στοιχεία</h4>
          <div className="form-check form-switch fs-5">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Τροποποίηση
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              checked={!readOnly}
              onChange={(e) => setReadOnly(!e.target.checked)}
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <hr />
        <form onSubmit={(e) => onSubmit(e)} id="userInfoUpdateFrom">
          <div className="row row-cols-2 gy-3">
            <InfoField
              text="Επίθετο"
              value={userInfo.user!.lastName}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, lastName: v },
                }));
              }}
            />
            <InfoField
              text="Α.Φ.Μ."
              value={userInfo.user!.AFM}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, AFM: v },
                }));
              }}
            />
            <InfoField
              text="Ημερομηνία γέννησης"
              value={userInfo.user!.born}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, born: v },
                }));
              }}
            />
            <InfoField
              text="A.M.K.A."
              value={userInfo.user!.AMKA}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, AMKA: v },
                }));
              }}
            />
            <InfoField
              text="Email"
              value={userInfo.user!.email}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, email: v },
                }));
              }}
            />
            <InfoField
              text="Τηλέφωνο"
              value={userInfo.user!.tel}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, tel: v },
                }));
              }}
            />
            <InfoField
              text="Όνομα Πατέρα"
              value={userInfo.user!.fathersName}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, fathersName: v },
                }));
              }}
            />
            <InfoField
              text="Όνομα Μητέρας"
              value={userInfo.user!.mothersName}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, mothersName: v },
                }));
              }}
            />
            <InfoField
              text="Διεύθυνση"
              value={userInfo.user!.address}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, address: v },
                }));
              }}
            />
            <InfoField
              text="Ταχ. κώδικας"
              value={userInfo.user!.zipcode}
              readOnly={readOnly}
              onChange={(v) => {
                setUserInfo((u) => ({
                  ...u,
                  user: { ...u.user!, zipcode: v },
                }));
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary mt-4 float-end"
            style={{
              visibility: readOnly ? "hidden" : "visible",
            }}
          >
            Υποβολή
          </button>
        </form>
      </div>
    </div>
  );
};
