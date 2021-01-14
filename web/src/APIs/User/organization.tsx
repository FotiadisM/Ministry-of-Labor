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
      joines: "",
      position: "",
      status: "NORMAL",
    },
    employees: [
      { id: "", userId: "", joines: "", position: "", status: "NORMAL" },
      { id: "", userId: "", joines: "", position: "", status: "NORMAL" },
      { id: "", userId: "", joines: "", position: "", status: "NORMAL" },
    ],
  };
};
