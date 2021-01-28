import React from "react";

interface ModalProps {
  title: string;
  msg: string;
}

export const showModal = () => {
  document.getElementById("____")!.click();
};

export const Modal: React.FC<ModalProps> = ({ title, msg }) => {
  return (
    <>
      <button
        type="button"
        id="____"
        className="btn btn-primary"
        style={{ visibility: "hidden", display: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#___"
      ></button>
      <div
        className="modal fade"
        id="___"
        tabIndex={-1}
        aria-labelledby="__"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="__">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{msg}</div>
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
    </>
  );
};
