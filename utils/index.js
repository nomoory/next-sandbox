export const MONTHES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const getTimeComponent = (jsTime = null) => {
  const time = new Date(jsTime);
  const monthIndex = time.getMonth();
  const date = time.getDate();
  const year = time.getFullYear();
  return {
    year,
    monthIndex,
    date,
    month: MONTHES[monthIndex]
  };
};

export const getTimeText = (jsTime = null, type = 0) => {
  if (!jsTime) return "";
  const { year, date, month, monthIndex } = getTimeComponent(jsTime);
  switch (type) {
    case 0:
      return `${month} ${date},${year}`;
      break;
    case 1:
      return `${year}.${monthIndex + 1}.${date}`;
      break;

    default:
      return `${month} ${date},${year}`;
      break;
  }
};
