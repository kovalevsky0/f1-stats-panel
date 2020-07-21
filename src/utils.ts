export const transformStrToDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr
    .split("/")
    .map((val: string): number => parseInt(val));

  return new Date(year, month - 1, day);
};
