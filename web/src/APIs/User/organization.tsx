// export const getOrganization = (id: string): Organization | null => {
//   return {
//     id: "1234",
//     name: "Confio",
//     AFM: "2346542571",
//     address: "Ιπποκράτους 4 Αθήνα, Αττική",
//     zipcode: "41234",
//     owner: {
//       id: "",
//       userId: "",
//       orgId: "123",
//       joined: "",
//       status: "NORMAL",
//       salaryMonth: 4000,
//       timeoffsYear: 24,
//       timeoffsTaken: 5,
//     },
//     employees: [
//       {
//         id: "1",
//         userId: "1",
//         orgId: "123",
//         joined: "dd",
//         status: "NORMAL",
//         salaryMonth: 2500,
//         timeoffsYear: 24,
//         timeoffsTaken: 5,
//       },
//       {
//         id: "2",
//         userId: "2",
//         orgId: "123",
//         joined: "fff",
//         status: "REMOTE",
//         salaryMonth: 2000,
//         timeoffsYear: 24,
//         timeoffsTaken: 5,
//       },
//       {
//         id: "3",
//         userId: "3",
//         orgId: "123",
//         joined: "dd",
//         status: "SUSPENSION",
//         salaryMonth: 1900,
//         timeoffsYear: 24,
//         timeoffsTaken: 5,
//       },
//     ],
//   };
// };

import { uri } from "../apis";

export const getOrganization = async (
  id: string
): Promise<Organization | null> => {
  try {
    const res = await fetch(uri + "/organizations/" + id);
    if (res.status === 200) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};

// export const getEmployByUserID = (id: string): Employ | null => {
//   return {
//     id: "asdfasd",
//     userId: "2345",
//     orgId: "123",
//     joined: "asdf",
//     salaryMonth: 2345,
//     status: "NORMAL",
//     timeoffsYear: 24,
//     timeoffsTaken: 5,
//   };
// };

export const getEmployByUserID = async (id: string): Promise<Employ | null> => {
  try {
    const res = await fetch(uri + "/employees/userId/" + id);
    if (res.status === 200) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const updateEmployState = async (
  fName: string,
  lName: string,
  afm: string,
  amka: string,
  status: Status,
  from: string,
  to: string
): Promise<"ok" | "bad" | null> => {
  try {
    const res = await fetch(uri + "/employees/update/status", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: fName,
        lastName: lName,
        AFM: afm,
        AMKA: amka,
        status: status,
        from: from,
        to: to,
      }),
    });

    if (res.status === 200) {
      return "ok";
    }

    const d = await res.json();
    if (d.error === undefined) {
      return null;
    }
    if (d.error === "Not found") {
      return "bad";
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};
