interface Route {
  text: string;
  status?: "active" | "";
  href: string;
}

interface User {
  id: string;
  email: string;
  AFM: string;
  firstName: string;
  lastName: string;
  born: string;
}

interface UserInfo {
  isLogedIn: boolean;
  user: User | null;
  access_token?: string;
}

enum Status {
  WORKING = "-",
  SUSPENSION = "Αναστολή",
  WORK_PERMIT = "Άδεια ειδικού σκοπού",
}

interface Employ {
  user: User;
  status: Status;
}

interface Organization {
  name: string;
  AFM: string;
  boss: User;
  employees: Employ[];
}
