export const DaysGeneralStats = ({ selectedDay }) => {
  const { date, dailyWaterRate, percentage, entries } = selectedDay;

  return (
    <div>
      <p>{date}</p>
      <p>Daily norma: {dailyWaterRate / 1000} L</p>
      <p>Fulfillment of the daily norm: {percentage}</p>
      <p>How many servings of water: {entries}</p>
    </div>
  );
};
