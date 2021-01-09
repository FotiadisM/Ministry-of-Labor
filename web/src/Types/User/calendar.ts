export interface Hour {
  hour: string;
  minute: string;
  active: boolean;
}

export interface Day {
  date: string;
  hours: Hour[];
}

export interface Month {
  name: string;
  days: Day[];
}
