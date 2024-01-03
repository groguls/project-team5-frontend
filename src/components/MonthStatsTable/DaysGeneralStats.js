export const DaysGeneralStats = ({ selectedDay }) => {
  console.log(selectedDay);
  const { date, dailyWaterRate, percentage, entries } = selectedDay;

  return (
    <div>
      <p>{date}</p>
      <p>Daily norma: {dailyWaterRate}</p>
      <p>Fulfillment of the daily norm: {percentage}</p>
      <p>How many servings of water: {entries}</p>
    </div>
  );
};
