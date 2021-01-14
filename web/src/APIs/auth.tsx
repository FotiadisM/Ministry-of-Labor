export const LogInAPI = (
  username: string,
  password: string
): UserState | null => {
  // fetch user
  const userInfo: UserState = {
    isLogedIn: true,
    user: {
      id: "1234",
      employmentInfo: {
        employId: "1234",
        organizationID: "1234",
        isOwner: true,
      },
      firstName: "Μιχαήλ",
      lastName: "Φωτιάδης",
      email: "mike@mail.com",
      AFM: "123442131245",
      born: "25/10/1999",
      fathersName: "Αντώνιος",
      mothersName: "Αμαλία",
      tel: "6974765198",
      address: "Γαληνού 13 Νέα Ιωνία, Αθήνα Αττική",
      zipcode: "14233",
    },
  };

  return userInfo;
};

export const getUser = (id: string): User | null => {
  return {
    id: "1234",
    employmentInfo: {
      employId: "1234",
      organizationID: "1234",
      isOwner: true,
    },
    firstName: "Μιχαήλ",
    lastName: "Φωτιάδης",
    email: "mike@mail.com",
    AFM: "123442131245",
    born: "25/10/1999",
    fathersName: "Αντώνιος",
    mothersName: "Αμαλία",
    tel: "6974765198",
    address: "Γαληνού 13 Νέα Ιωνία, Αθήνα Αττική",
    zipcode: "14233",
  };
};
