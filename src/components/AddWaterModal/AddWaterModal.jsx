import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { addWater } from '../../redux/water/waterOperations';
import {
  Amounter,
  AddButton,
  AddWaterValue,
  FormStyled,
  TimeLabelContainer,
  EnterLabelContainer,
  SubmitBtnContainer,
  InfoLabel,
  SubmitBtn,
  AmountLabelContainer,
  AmountWraper,
} from './AddWaterModal.styled';
import toast from 'react-hot-toast';
import Typography from 'components/Typography/Typography';
import { Minus } from 'components/Icons/Minus';
import { Plus } from 'components/Icons/Plus/Plus';
import { InputTime } from 'components/AddWaterModal/InputTime';
import { InputWaterVolume } from 'components/AddWaterModal/InputWaterVolume';

export const AddWaterModal = () => {
  const dispatch = useDispatch();
  const toggleModal = useModal();
  const [waterVolume, setWaterVolume] = useState(0);
  const [inputWaterVolume, setInputWaterVolume] = useState(null);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const date = form.elements.date.value;
    const waterVolume = +form.elements.waterVolume.value;

    dispatch(addWater({ waterVolume, date }));
    toast.success('Water was successfully added');
    form.reset();
    toggleModal();
  };

  const handleWaterButtons = action => {
    switch (action) {
      case 'increment':
        setWaterVolume(prev => Math.min(5000, Math.ceil((prev + 1) / 50) * 50));
        break;
      case 'decrement':
        setWaterVolume(prev => Math.max(0, Math.floor((prev - 1) / 50) * 50));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setInputWaterVolume(waterVolume);
  }, [waterVolume]);

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <AmountWraper>
          <Typography styled="ListTitle">Choose a value:</Typography>
          <AmountLabelContainer>
            <Typography styled="Text">Amount of water:</Typography>
            <Amounter>
              <AddButton
                onClick={() => {
                  handleWaterButtons('decrement');
                }}
                type="button"
              >
                <Minus />
              </AddButton>
              <AddWaterValue>{waterVolume}ml</AddWaterValue>
              <AddButton
                onClick={() => {
                  handleWaterButtons('increment');
                }}
                type="button"
              >
                <Plus />
              </AddButton>
            </Amounter>
          </AmountLabelContainer>
        </AmountWraper>
        <TimeLabelContainer htmlFor="addTime">
          <Typography styled="Text">Recording time:</Typography>

          <InputTime
            id="addTime"
            name="date"
            defaultValue={new Date()}
            ampm={false}
            openTo="hours"
            views={['hours', 'minutes']}
            format="HH:mm"
            disableFuture={true}
          />
        </TimeLabelContainer>
        <EnterLabelContainer htmlFor="waterVolume">
          <Typography styled="ListTitle">
            Enter the value of the whater used:
          </Typography>

          <InputWaterVolume
            type="number"
            name="waterVolume"
            id="waterVolume"
            value={Number(inputWaterVolume).toString()}
            step={10}
            max={5000}
            min={0}
            onBlur={evt => {
              setWaterVolume(+evt.target.value);
            }}
            onChange={evt => {
              setInputWaterVolume(+evt.target.value);
            }}
          />
        </EnterLabelContainer>
        <SubmitBtnContainer>
          <InfoLabel>{waterVolume}ml</InfoLabel>
          <SubmitBtn type="submit">Save</SubmitBtn>
        </SubmitBtnContainer>
      </FormStyled>
    </>
  );
};
