export const DaysGeneralStats = ({ selectedDay }) => {
  const { date, percentage, entries, dailyWaterRate } = selectedDay;
  return (
    <div>
      <p>{date}</p>
      <p>Daily norma: {dailyWaterRate}</p>
      <p>Fulfillment of the daily norm: {percentage}</p>
      <p>How many servings of water: {entries}</p>
    </div>
  );
};
