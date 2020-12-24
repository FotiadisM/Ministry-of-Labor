export const getUserActiveDates = (access_token: string): Date[] | null => {
  const dates: Date[] = [new Date(), new Date(), new Date()];

  return dates;
};

export const getUserOldDates = (access_token: string): Date[] | null => {
  const dates: Date[] = [new Date(), new Date(), new Date()];

  return dates;
};

export const getAvailableDates = (
  access_token: string
):
  | {
      name: string;
      days: {
        date: string;
        hours: [{ hour: string; minute: string; active: boolean }];
      }[];
    }[]
  | null => {
  return null;
};
