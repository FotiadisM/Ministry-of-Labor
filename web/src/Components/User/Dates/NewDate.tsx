import React, { useState, useEffect } from "react";
import { getAvailableDates } from "../../../APIs/User/dates";
import { useHovered } from "../../../Hooks/hooks";
import { Day, Hour, Month } from "../../../Types/User/calendar";

interface HourElementProps {
  hour: Hour;
  showModal: () => void;
}

const HourElement: React.FC<HourElementProps> = ({ hour, showModal }) => {
  const inactiveColor = "#e5e5e5";
  const [hovered, setHovered] = useHovered();
  const selectDate = () => {
    showModal();
  };

  return (
    <li
      className={
        "py-2 ps-3 border-bottom " +
        (hour.active && hovered ? "shadow-lg text-primary fw-bold" : "")
      }
      style={{
        backgroundColor: hour.active ? "" : inactiveColor,
        cursor: hour.active ? "pointer" : "",
      }}
      onMouseEnter={hour.active ? setHovered : undefined}
      onMouseLeave={hour.active ? setHovered : undefined}
      onClick={() => selectDate()}
    >
      {hour.hour + ":" + hour.minute}
    </li>
  );
};

interface DateCardProps {
  day: Day;
  showModal: () => void;
}

const DateCard: React.FC<DateCardProps> = ({ day, showModal }) => {
  return (
    <div className="border rounded">
      <p
        className="text-primary fw-bolder float-end mb-0 me-3"
        style={{ fontSize: "3rem" }}
      >
        {day.date}
      </p>
      <ul className="list-unstyled mb-0">
        {day.hours.map((h, i) => {
          return <HourElement key={i} hour={h} showModal={showModal} />;
        })}
      </ul>
    </div>
  );
};

interface NewDateProps {
  months: Month[];
  margin: number[];
  showModal: () => void;
}

const NewDate: React.FC<NewDateProps> = ({ months, margin, showModal }) => {
  const [curMonth, setCurMonth] = useState<number>(0);

  var rows = [];
  for (let i = 0; i < margin[curMonth] - 1; i++) {
    rows.push(<div></div>);
  }

  return (
    <div className="container pt-5">
      <div className="d-flex justify-content-center mb-5">
        <button
          className="btn btn-primary"
          disabled={curMonth === 0 ? true : false}
          onClick={() => {
            setCurMonth((i) => i - 1);
          }}
        >
          Πίσω
        </button>
        <h2 className="px-5">{months[curMonth].name}</h2>
        <button
          className="btn btn-primary"
          disabled={curMonth === months.length - 1 ? true : false}
          onClick={() => {
            setCurMonth((i) => i + 1);
          }}
        >
          Επόμενο
        </button>
      </div>
      <div className="row row-cols-5">
        <div className="fw-bold">Δευτέρα</div>
        <div className="fw-bold">Τρίτη</div>
        <div className="fw-bold">Τετάρτη</div>
        <div className="fw-bold">Πέμπτη</div>
        <div className="fw-bold">Παρασκευή</div>
        {rows}
        {months[curMonth].days.map((d, i) => {
          return (
            <div key={i} className="col g-2">
              <DateCard day={d} showModal={showModal} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const NewDateProvider: React.FC = () => {
  const [months, setMonths] = useState<Month[]>([]);
  const [margin, setMaring] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAvailableDates("asfd");
      if (data !== null) {
        setMonths(data.months);
        setMaring(data.days);
      }
    };

    fetchData();
  }, []);

  // const [selectedDate, setSelectedDate] = useState<{
  //   month: string;
  //   day: string;
  //   hour: string;
  //   minutes: string;
  // } | null>(null);

  const showModal = (): void => {
    document.getElementById("newDateModalBtn")!.click();
  };

  return (
    <div>
      {months.length ? (
        <NewDate months={months} margin={margin} showModal={showModal} />
      ) : (
        ""
      )}
      <button
        type="button"
        id="newDateModalBtn"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#newDateModal"
        style={{ display: "none", visibility: "hidden" }}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="newDateModal"
        tabIndex={-1}
        aria-labelledby="newDateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newDateModalLabel">
                Καταχώρηση ραντεβού;
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Το ραντεβού θα καταχωρηθεί στις</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Ακύρωση
              </button>
              <button type="button" className="btn btn-primary">
                Υποβολή
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
