export type Format = "week" | "month" | "year";
const range = [
  [1, 7],
  [8, 14],
  [15, 21],
  [22, 28],
  [29, 31],
];
export function getDateOptions(date: string, format: Format) {
  const dateObj = new Date(date);

  switch (format) {
    case "week":
      return dateObj.toLocaleDateString("en-US", {
        weekday: "short",
      });
    case "month":
      const monthDay = new Date(date).getDate();
      const monthName = dateObj.toLocaleDateString("en-US", {
        month: "short",
      });
      const rangeIndex = range.findIndex(
        (dayRange) => dayRange[0] <= monthDay && dayRange[1] >= monthDay,
      );

      if (rangeIndex === -1) return monthName;

      return `${range[rangeIndex][0]}-${range[rangeIndex][1]} ${monthName}`;
    case "year":
      return dateObj.toLocaleDateString("en-US", {
        month: "short",
      });

    default:
      return dateObj.toLocaleDateString("en-US");
  }
}
