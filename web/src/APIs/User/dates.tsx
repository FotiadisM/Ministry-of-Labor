import { Month } from "../../Types/User/calendar";

export const getUserActiveDates = (access_token: string): Date[] | null => {
  const dates: Date[] = [new Date(), new Date(), new Date()];

  return dates;
};

export const getUserOldDates = (access_token: string): Date[] | null => {
  const dates: Date[] = [new Date(), new Date(), new Date()];

  return dates;
};

export const getAvailableDates = async (
  access_token: string
): Promise<{ months: Month[]; days: number[] } | null> => {
  try {
    const res = await fetch("http://localhost:8080/dates/available");
    console.log(res);
    if (res.status === 200) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};
