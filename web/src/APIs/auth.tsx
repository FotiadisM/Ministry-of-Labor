// export const LogInAPI = (
//   username: string,
//   password: string
// ): UserState | null => {
//   // fetch user
//   const userInfo: UserState = {
//     isLogedIn: true,
//     user: {
//       id: "1234",
//       employmentInfo: {
//         employId: "1234",
//         organizationID: "1234",
//         isOwner: true,
//       },
//       firstName: "Μιχαήλ",
//       lastName: "Φωτιάδης",
//       email: "mike@mail.com",
//       AFM: "123442131245",
//       AMKA: "asdf",
//       born: "25/10/1999",
//       fathersName: "Αντώνιος",
//       mothersName: "Αμαλία",
//       tel: "6974765198",
//       address: "Γαληνού 13 Νέα Ιωνία, Αθήνα Αττική",
//       zipcode: "14233",
//     },
//   };

//   return userInfo;
// };

const uri = "http://server:8080";

export const LogInAPI = async (
  username: string,
  password: string
): Promise<{ user: User } | null> => {
  try {
    const res = await fetch(uri + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (res.status === 200) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};

// export const getUser = (id: string): User | null => {
//   return {
//     id: "1234",
//     employmentInfo: {
//       employId: "1234",
//       organizationID: "1234",
//       isOwner: true,
//     },
//     firstName: "Μιχαήλ",
//     lastName: "Φωτιάδης",
//     email: "mike@mail.com",
//     AFM: "123442131245",
//     AMKA: "2345",
//     born: "25/10/1999",
//     fathersName: "Αντώνιος",
//     mothersName: "Αμαλία",
//     tel: "6974765198",
//     address: "Γαληνού 13 Νέα Ιωνία, Αθήνα Αττική",
//     zipcode: "14233",
//   };
// };

export const getUser = async (id: string): Promise<User | null> => {
  try {
    const res = await fetch(uri + "/users/" + id);
    if (res.status === 200) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const getStatus = (s: string): string => {
  switch (s) {
    case "NORMAL":
      return "-";
    case "SUSPENSION":
      return "Αναστολή";
    case "VACATION":
      return "Άδεια";
    case "REMOTE":
      return "Τηλεργασία";
    case "SPECIAL_VACATION":
      return "Άδεια ειδικού σκοπού";
  }

  return "-";
};
