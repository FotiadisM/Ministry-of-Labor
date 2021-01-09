import React, { useState } from "react";
import { getAvailableDates } from "../../../APIs/User/dates";
import { useHovered } from "../../../Hooks/hooks";

interface HourElementProps {
  hour: string;
  minute: string;
  active: boolean;
}

const HourElement: React.FC<HourElementProps> = ({ hour, minute, active }) => {
  const inactiveColor = "#e5e5e5";
  const [hovered, setHovered] = useHovered();

  return (
    <li
      className={
        "py-2 ps-3 border-bottom " +
        (active && hovered ? "shadow-lg text-primary fw-bold" : "")
      }
      style={{
        backgroundColor: active ? "" : inactiveColor,
        cursor: active ? "pointer" : "",
      }}
      onMouseEnter={active ? setHovered : undefined}
      onMouseLeave={active ? setHovered : undefined}
      onClick={() => alert("asfonC")}
    >
      {hour + ":" + minute}
    </li>
  );
};

interface DateCardProps {
  date: string;
  hours: HourElementProps[];
}

const DateCard: React.FC<DateCardProps> = ({ date, hours }) => {
  return (
    <div className="border rounded">
      <p
        className="text-primary fw-bolder float-end mb-0 me-3"
        style={{ fontSize: "3rem" }}
      >
        {date}
      </p>
      <ul className="list-unstyled mb-0">
        {hours.map((h, i) => {
          return <HourElement key={i} {...h} />;
        })}
      </ul>
    </div>
  );
};

interface CalendarMonth {
  name: string;
  days: DateCardProps[];
}

interface NewDateProps {
  months: CalendarMonth[];
}

const NewDate: React.FC<NewDateProps> = ({ months }) => {
  const [curMonth, setCurMonth] = useState<number>(0);

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
        {months[curMonth].days.map((d, i) => {
          return (
            <div key={i} className="col g-2">
              <DateCard date={d.date} hours={d.hours} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const m: CalendarMonth[] = [
  {
    name: "Junuary",
    days: [
      {
        date: "1",
        hours: [
          { hour: "09", minute: "00", active: false },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: false },
          { hour: "12", minute: "00", active: false },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: false },
        ],
      },
      {
        date: "2",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "3",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "4",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "5",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "6",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "7",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "8",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "9",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "10",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "11",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "12",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "13",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "14",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "15",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "16",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "17",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "18",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "19",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "20",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "21",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "22",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "23",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "24",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "25",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "26",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "27",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "28",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "29",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "30",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "31",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
    ],
  },
  {
    name: "February",
    days: [
      {
        date: "1",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "2",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "3",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "4",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "5",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "6",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "7",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "8",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "9",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "10",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "11",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "12",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "13",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "14",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "15",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "16",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "17",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "18",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "19",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "20",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "21",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "22",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "23",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "24",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "25",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "26",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "27",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
      {
        date: "28",
        hours: [
          { hour: "09", minute: "00", active: true },
          { hour: "10", minute: "00", active: true },
          { hour: "11", minute: "00", active: true },
          { hour: "12", minute: "00", active: true },
          { hour: "13", minute: "00", active: true },
          { hour: "14", minute: "00", active: true },
          { hour: "15", minute: "00", active: true },
        ],
      },
    ],
  },
];

export const NewDateProvider: React.FC = () => {
  // const [months, setMonths] = useState<CalendarMonth[]>([]);

  // useEffect(() => {
  //   let m = getAvailableDates("asfd");
  //   if (m !== null) {
  //     setMonths(m);
  //   }
  // }, []);

  return <NewDate months={m} />;
};
