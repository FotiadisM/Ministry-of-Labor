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
  born: Date;
}

enum Status {
  WORKING,
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
