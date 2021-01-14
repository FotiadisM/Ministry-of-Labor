import { createContext } from "react";

interface UserContextProps {
  userInfo: UserState;
  setUserInfo: React.Dispatch<React.SetStateAction<UserState>>;
}
export const UserContext = createContext<UserContextProps | null>(null);
