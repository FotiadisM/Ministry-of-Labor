export const LogInAPI = (
  username: string,
  password: string
): UserInfo | null => {
  // fetch user
  const userInfo: UserInfo = {
    isLogedIn: true,
    user: {
      id: "1234",
      firstName: "Μιχαήλ",
      lastName: "Φωτιάδης",
      email: "mike@mail.com",
      AFM: "123442131245",
      born: "25/10/1999",
    },
  };

  return userInfo;
};
