export const ConversionTime = (date: string) => {
  const dates = new Date(date);
  const formattedDateTime = dates.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return formattedDateTime;
};
