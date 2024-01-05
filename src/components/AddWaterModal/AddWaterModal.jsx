import { AmountOfWater } from './AmountOfWater';
import { AddWaterTime } from './AddWaterTime';
import { AddEnterValueWater } from './AddEnterValueWater';
import { SaveBtn } from './SaveBtn';

export const AddWaterModal = () => {
  // const [amount, setAmount] = useState(null);
  // console.log('AmountOfWater  amount:', amount);

  // useEffect(() => {
  //   if (amount >= 0) {
  //     setAmount(amount);
  //   }
  // }, [amount]);

  return (
    <>
      <AmountOfWater />
      <AddWaterTime />
      <AddEnterValueWater />
      <SaveBtn />
    </>
  );
};
