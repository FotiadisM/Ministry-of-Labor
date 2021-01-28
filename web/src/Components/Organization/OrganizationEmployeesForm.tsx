import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  onSubmit: (e: React.FormEvent<HTMLFormElement>, info: Info) => void;
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

  let location = useLocation<{
    firstName: string;
    lastName: string;
    AFM: string;
    AMKA: string;
  }>();

  let { state } = location;
  useEffect(() => {
    if (state !== null) {
      setInfo((i) => ({
        ...i,
        firstName: state.firstName,
        lastName: state.lastName,
        AFM: state.AFM,
        AMKA: state.AMKA,
      }));
    }
  }, [state]);

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
          id="orgEmployForm"
          onSubmit={(e) => {
            onSubmit(e, info);
          }}
          noValidate
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
              pattern="[0-9]{9}"
            />
            <InfoField
              text="Α.Μ.Κ.Α."
              value={info.AMKA}
              readOnly={false}
              onChange={(v) => {
                setInfo((oldInfo) => ({ ...oldInfo, AMKA: v }));
              }}
              pattern="[0-9]{11}"
            />
            <div className="col">
              <span>Από</span>
              <input
                type="date"
                className="form-control"
                onChange={(e) =>
                  setInfo((oldInfo) => ({ ...oldInfo, from: e.target.value }))
                }
                required
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
                required
              />
            </div>
          </div>
          <button className="btn btn-lg btn-primary mt-5">Υποβολή</button>
        </form>
      </div>
      <button
        type="button"
        id="orgFormModalBtn"
        className="btn btn-primary"
        style={{ visibility: "hidden", display: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#orgFormModal"
      ></button>
      <div
        className="modal fade"
        id="orgFormModal"
        tabIndex={-1}
        aria-labelledby="orgFormModalEx"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="orgFormModalEx">
                Το αίτημα σας καταχωρήθηκε με επιτυχία.
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Πατήστε οκ για να συνεχίσετε</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                ΟΚ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
