interface Route {
  text: string;
  status?: "active" | "";
  href: string;
}

type darkBlue = "#255c99";

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
  AMKA: string;
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

type Status =
  | "NORMAL"
  | "SUSPENSION"
  | "VACATION"
  | "REMOTE"
  | "SPECIAL_VACATION";

interface Employ {
  id: string;
  // position: string;
  userId: string;
  orgId: string;
  joined: string;
  salaryMonth: number;
  timeoffsYear: number;
  timeoffsTaken: number;
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
