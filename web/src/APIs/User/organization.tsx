export const getOrganization = (id: string): Organization | null => {
  return {
    id: "1234",
    name: "Confio",
    AFM: "2346542571",
    address: "Ιπποκράτους 4 Αθήνα, Αττική",
    zipcode: "41234",
    owner: {
      id: "",
      userId: "",
      joined: "",
      status: "NORMAL",
      salaryMonth: 4000,
    },
    employees: [
      {
        id: "1",
        userId: "1",
        joined: "dd",
        status: "NORMAL",
        salaryMonth: 2500,
      },
      {
        id: "2",
        userId: "2",
        joined: "fff",
        status: "REMOTE",
        salaryMonth: 2000,
      },
      {
        id: "3",
        userId: "3",
        joined: "dd",
        status: "SUSPENSION",
        salaryMonth: 1900,
      },
    ],
  };
};
