import React, { useEffect, useState } from "react";
import { getAvailableDates } from "../../../APIs/User/dates";

interface CDateProps {
  date: string;
  hours: [{ hour: string; minute: string; active: boolean }];
}

const CDate: React.FC<CDateProps> = ({ date, hours }) => {
  return (
    <div>
      {hours.map((h) => {
        return <div>{h.hour + ":" + h.minute}</div>;
      })}
    </div>
  );
};

interface CalendarMonth {
  name: string;
  days: CDateProps[];
}

interface NewDateProps {
  months: CalendarMonth[];
}

const NewDate: React.FC<NewDateProps> = ({ months }) => {
  const [curMonth, setCurMonth] = useState<number>(0);

  return (
    <div className="container pt-5">
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary"
          disabled={curMonth === 0 ? true : false}
          onClick={() => {
            setCurMonth((i) => i++);
          }}
        >
          back
        </button>
        <h2 className="px-5">{months[curMonth].name}</h2>
        <button
          className="btn btn-primary"
          disabled={curMonth === months.length - 1 ? true : false}
          onClick={() => {
            setCurMonth((i) => i--);
          }}
        >
          next
        </button>
      </div>
      <div className="row row-cols-7">
        {months[curMonth].days.map((d, i) => {
          return <CDate key={i} date={d.date} hours={d.hours} />;
        })}
      </div>
    </div>
  );
};

export const NewDateProvider: React.FC = () => {
  const [months, setMonths] = useState<CalendarMonth[]>([]);

  useEffect(() => {
    let m = getAvailableDates("asfd");
    if (m !== null) {
      setMonths(m);
    }
  }, []);

  return <div></div>;
};
