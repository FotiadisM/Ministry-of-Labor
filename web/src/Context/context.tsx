import { createContext } from "react";

interface UserContextProps {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}
export const UserContext = createContext<UserContextProps | null>(null);
