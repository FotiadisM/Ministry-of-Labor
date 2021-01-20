import React, { useState } from "react";
import { InfoField } from "../User/User/UserProfile";

export interface Info {
  firstName: string;
  lastName: string;
  AFM: string;
  AMKA: string;
  from: string;
  to: string;
}

interface OrganizationEmployeesFormProps {
  title: string;
  onSubmit: (info: Info) => void;
}

export const OrganizationEmployeesForm: React.FC<OrganizationEmployeesFormProps> = ({
  title,
  onSubmit,
}) => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    AFM: "",
    AMKA: "",
    from: "",
    to: "",
  });

  return (
    <div className="container my-5">
      <div className="pb-4">
        <h2 className="fst-italic">
          <i className="bi bi-pencil pe-4" style={{ fontSize: "2.5rem" }}></i>
          {title}
        </h2>
        <hr />
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(info);
          }}
        >
          <div className="row row-cols-2 gy-4">
            <InfoField
              text="Όνομα"
              value={info.firstName}
              readOnly={false}
              onChange={(v) => {
                setInfo((oldInfo) => ({ ...oldInfo, firstName: v }));
              }}
            />
            <InfoField
              text="Επίθετο"
              value={info.lastName}
              readOnly={false}
              onChange={(v) => {
                setInfo((oldInfo) => ({ ...oldInfo, lastName: v }));
              }}
            />
            <InfoField
              text="Α.Φ.Μ"
              value={info.AFM}
              readOnly={false}
              onChange={(v) => {
                setInfo((oldInfo) => ({ ...oldInfo, AFM: v }));
              }}
            />
            <InfoField
              text="Α.Μ.Κ.Α."
              value={info.AMKA}
              readOnly={false}
              onChange={(v) => {
                setInfo((oldInfo) => ({ ...oldInfo, AMKA: v }));
              }}
            />
            <div className="col">
              <span>Από</span>
              <input
                type="date"
                className="form-control"
                onChange={(e) =>
                  setInfo((oldInfo) => ({ ...oldInfo, from: e.target.value }))
                }
              />
            </div>
            <div className="col">
              <span>Μέχρι</span>
              <input
                type="date"
                className="form-control"
                onChange={(e) =>
                  setInfo((oldInfo) => ({ ...oldInfo, to: e.target.value }))
                }
              />
            </div>
          </div>
          <button className="btn btn-lg btn-primary mt-5">Υποβολή</button>
        </form>
      </div>
    </div>
  );
};
