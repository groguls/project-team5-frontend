export const calculateWater = (
  { weight, hours, gender } = { gender: 'male', hours: 0, weight: 0 }
) => {
  if (+weight === 0 || !weight) return 0;

  switch (gender) {
    case 'male':
      return +weight * 0.03 + +hours * 0.4;

    case 'female':
      return +weight * 0.04 + +hours * 0.6;

    default:
      return 0;
  }
};
