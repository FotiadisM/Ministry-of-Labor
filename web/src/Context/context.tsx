import { createContext } from "react";

export const UserContext = createContext<UserInfo>({
  isLogedIn: false,
  user: null,
});
