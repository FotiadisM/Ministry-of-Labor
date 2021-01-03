import React, { useEffect, useState } from "react";
import { getUserActiveDates } from "../../../APIs/User/dates";

interface TableProps {
  title: string;
  rows: Date[];
  active: boolean;
  setDeletedDate: React.Dispatch<React.SetStateAction<number>>;
}

const Table: React.FC<TableProps> = ({
  title,
  rows,
  active,
  setDeletedDate,
}) => {
  return (
    <div className="pt-5">
      <h2>{title}</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
            {active ? <th scope="col">State</th> : ""}
          </tr>
        </thead>
        <tbody>
          {rows.map((d, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i}</th>
                <td>
                  {d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear()}
                </td>
                <td>{d.getHours() + ":" + d.getMinutes()}</td>
                {active ? (
                  <td>
                    <button
                      id={"activeCalendarButton" + i}
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#calendarModal"
                      onClick={() => setDeletedDate(i)}
                    >
                      Ακύρωση
                    </button>
                  </td>
                ) : (
                  ""
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {
  const [deletedDate, setDeletedDate] = useState<number>(-1);
  const [activeDates, setActiveDates] = useState<Date[]>([]);
  const [oldDates, setOldDates] = useState<Date[]>([]);

  useEffect(() => {
    let aDates = getUserActiveDates("asdf");
    if (aDates != null) {
      setActiveDates(aDates);
    }

    let oldDates = getUserActiveDates("asdf");
    if (oldDates != null) {
      setOldDates(oldDates);
    }
  }, []);

  const onDeleteDate = () => {
    console.log(deletedDate);
    setActiveDates((dates) => {
      dates.splice(deletedDate, 1);
      return dates;
    });
  };

  return (
    <div className="container text-center py-5">
      <Table
        title="Ανερχόμενα Ραντεβού"
        rows={activeDates}
        active={true}
        setDeletedDate={setDeletedDate}
      />
      {activeDates.length === 0 ? (
        <div className="fs-4 py-5">Δεν έχεται κανένα ραντεβού</div>
      ) : (
        ""
      )}
      <Table
        title="Περασμένα Ραντεβού"
        rows={oldDates}
        active={false}
        setDeletedDate={setDeletedDate}
      />
      {activeDates.length === 0 ? (
        <div className="fs-4 py-5">Δεν έχεται προηγούμενα ραντεβού</div>
      ) : (
        ""
      )}

      <div
        className="modal fade"
        id="calendarModal"
        tabIndex={-1}
        aria-labelledby="calendarModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="calendarModalLabel">
                Προσοχή
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Θέλετε σίγουρα να διαγράψετε το Ραντεβού σας;</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Πίσω
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={onDeleteDate}
              >
                Ακύρωση Ραντεβού
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
