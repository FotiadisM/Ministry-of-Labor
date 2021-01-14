interface Route {
  text: string;
  status?: "active" | "";
  href: string;
}

interface EmploymentInfo {
  employId: string;
  organizationID: string;
  isOwner: boolean;
}

interface User {
  id: string;
  employmentInfo: EmploymentInfo | null;
  email: string;
  AFM: string;
  firstName: string;
  lastName: string;
  born: string;
  tel: string;
  fathersName: string;
  mothersName: string;
  address: string;
  zipcode: string;
}

interface UserState {
  isLogedIn: boolean;
  user: User | null;
  access_token?: string;
}

// const enum Status {
//   NORMAL = 1,
//   SUSPENSION = 2,
//   VACATION = 3,
//   REMOTE = 4,
// }

type Status = "NORMAL" | "SUSPENSION" | "VACATION" | "REMOTE";

interface Employ {
  id: string;
  position: string;
  userId: string;
  joines: string;
  status: Status;
}

interface Organization {
  id: string;
  name: string;
  AFM: string;
  address: string;
  zipcode: string;
  owner: Employ;
  employees: Employ[];
}
