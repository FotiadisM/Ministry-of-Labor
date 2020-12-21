import { createContext } from "react";

interface UserContextProps {
  userInfo: UserInfo;
  serUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}
export const UserContext = createContext<UserContextProps | null>(null);
