import React, { useState } from "react";
import grFlag from "../../assets/greek.jpeg";
import euFlag from "../../assets/euflag.png";

const Service: React.FC<{ text: string }> = ({ text }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const toggleHover = () => {
    setHovered((h) => !h);
  };

  return (
    <li>
      <i className="bi bi-arrow-right" style={{ fontSize: "1.6rem" }}></i>
      <span
        className={"ps-2 " + (hovered ? "text-primary fw-bold" : "")}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {text}
      </span>
    </li>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="pt-2 pb-4" style={{ backgroundColor: "#e5e5e5" }}>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col">
            <hr className="bg-primary" style={{ height: "5px" }} />
            <h5>Υπουργείο Εργασίας & Κοινωνικών Υποθέσεων</h5>
          </div>

          <div className="col">
            <hr className="bg-primary" style={{ height: "5px" }} />
            <h5>Επικοινωνία</h5>
            <p>
              Σταδίου 29, Αθήνα 10559,
              <br />
              Αττική.
              <br />
              <i className="bi bi-envelope-fill">
                <span className="ps-2">ministry@gov.gov</span>
              </i>
              <br />
              <i className="bi bi-telephone-fill">
                <span className="ps-2">+30 210 367 1849</span>
              </i>
              <br />
              <i className="bi bi-telephone-fill">
                <span className="ps-2">+30 210 364 2576</span>
              </i>
            </p>
          </div>

          <div className="col">
            <hr className="bg-primary" style={{ height: "5px" }} />
            <h5>Υπηρεσίες και Προσβασιμότητα</h5>
            <ul className="list-unstyled">
              <Service text="Υπηρερίσες" />
              <Service text="Υποστήριξη" />
              <Service text="Προσβασιμότητα" />
            </ul>
          </div>

          <div className="col pt-3">
            <div className="row justify-content-between">
              <div className="col-6 mx-auto">
                <img src={grFlag} className="img-fluid" alt="Ελληνική σημαία" />
              </div>
              <div className="col-6 mx-auto">
                <img
                  src={euFlag}
                  className="img-fluid"
                  alt="Ευρωπαική σημαία"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
