import React, { useState } from "react";

interface UserFormTimeOffProps {
  title: string;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    info: {
      from: string;
      to: string;
    }
  ) => void;
}

export const UserFormTimeOff: React.FC<UserFormTimeOffProps> = ({
  title,
  onSubmit,
}) => {
  const [info, setInfo] = useState<{ from: string; to: string }>({
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
      <form
        id="userFormTimeOff"
        className="mt-5"
        onSubmit={(e) => {
          onSubmit(e, info);
        }}
        noValidate
      >
        <div className="row">
          <div className="col">
            <span>Από</span>
            <input
              type="date"
              className="form-control"
              onChange={(e) => {
                setInfo((o) => ({ ...o, from: e.target.value }));
              }}
              required
            />
          </div>
          <div className="col">
            <span>Μέχρι</span>
            <input
              type="date"
              className="form-control"
              onChange={(e) => {
                setInfo((o) => ({ ...o, to: e.target.value }));
              }}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Υποβολή
        </button>
      </form>
      <button
        type="button"
        id="userFormModalBtn"
        className="btn btn-primary"
        style={{ visibility: "hidden", display: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#userFormModal"
      >
        Το αίτημα σας καταχωρήθηκε με επιτυχία
      </button>
      <div
        className="modal fade"
        id="userFormModal"
        tabIndex={-1}
        aria-labelledby="userFormModalEx"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userFormModalEx">
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
