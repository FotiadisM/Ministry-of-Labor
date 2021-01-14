import React from "react";
import { NavLink as button, useHistory } from "react-router-dom";

export const Contact: React.FC = () => {
  let history = useHistory();
  return (
    <div className="container my-5">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Σημαντική Σημείωση</h4>
        <hr />
        <p>
          Στο πλαίσιο των μέτρων πρόληψης της πανδημίας Covid-19 και κατ'
          εφαρμογή των σχετικών διατάξεων σας ενημερώνουμε οτι οι υπηρεσίες του
          Υπουργείου δέχονται κοινό μόνο για επείγουσες περιπτώσεις και μόνο
          κατόπιν ραντεβού.
        </p>
      </div>
      <div className="py-4">
        <h3>Στοιχεία Επικοινωνίας</h3>
        <hr />
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
      </div>
      <div className="py-4">
        <h3>Ηλεκτρονικά Ραντεβού</h3>
        <hr />
        <p>
          Μπορείτε να κλείσετε ραντεβού με την υπηρεσία e -ραντεβού με την χρήση
          κωδικών Taxisnet.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/user/dates/new")}
        >
          Προγραμματείστε ηλεκτρονικό ραντεβού
          <i className="bi bi-arrow-right ps-2"></i>
        </button>
      </div>
      <div className="py-4">
        <h3>Ωράριο</h3>
        <hr />
        <p>Το Υπουργείο εξυπηρετεί πολίτες τις μέρες και ώρες:</p>
        <ul>
          <li>Δευτέρα: 08:00 - 16:00</li>
          <li>Τρίτη: 08:00 - 16:00</li>
          <li>Τετάρτη: 08:00 - 16:00</li>
          <li>Πέμπτη: 08:00 - 16:00</li>
          <li>Παρασκευή: 08:00 - 16:00</li>
        </ul>
        <p>Εξαιρούνται αργείες και γιορτές</p>
      </div>
      <div className="py-4">
        <h3>Τοποθεσία</h3>
        <hr />
        <p>Το Υπουργείο βρίσκεται στην οδό Σταδίου 29, Αθήνα 105 59</p>
        <p>
          Μπορείτε να το δείτε και στον χάρτη{" "}
          <a
            href="https://www.google.com/maps/place/%CE%A5%CF%80%CE%BF%CF%85%CF%81%CE%B3%CE%B5%CE%AF%CE%BF+%CE%95%CF%81%CE%B3%CE%B1%CF%83%CE%AF%CE%B1%CF%82+%CE%BA%CE%B1%CE%B9+%CE%9A%CE%BF%CE%B9%CE%BD%CF%89%CE%BD%CE%B9%CE%BA%CF%8E%CE%BD+%CE%A5%CF%80%CE%BF%CE%B8%CE%AD%CF%83%CE%B5%CF%89%CE%BD/@37.9804173,23.7288857,17z/data=!4m5!3m4!1s0x14a1bd3bad145a41:0x6db1fc0cbb58a00a!8m2!3d37.9804173!4d23.7310797"
            target="_blank"
            rel="noreferrer"
          >
            εδώ
          </a>
        </p>
      </div>
    </div>
  );
};
