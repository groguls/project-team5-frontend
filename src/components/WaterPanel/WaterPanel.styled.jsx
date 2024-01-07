import styled from 'styled-components';

export const WaterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 356px;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
  }
`;

export const Today = styled.p`
  color: ${props => `${props.theme.colors.primaryBlue}`};
  font-size: ${props => `${props.theme.fontSizes.listTitle}`};
  line-height: 1.3;
  margin-bottom: 8px;
`;

export const InputRange = styled.input`
  &[type='range'] {
    width: 256px;
    height: 8px;
    border-radius: 10px;
    appearance: none;
    background: linear-gradient(
      to right,
      #9ebbff 0%,
      #9ebbff ${props => props.value},
      #d7e3ff ${props => props.value},
      #d7e3ff 100%
    );
    margin-left: 10px;
    margin-bottom: 4px;
  }
  &[type='range']::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background: ${props => `${props.theme.colors.primaryWhite}`};
    border-radius: 50%;
    border: solid 1px ${props => `${props.theme.colors.primaryBlue}`};
    appearance: none;
    /* margin-top: -2px; */
  }

  @media screen and (min-width: 768px) {
    &[type='range'] {
      width: 325px;
    }
  }

  @media screen and (min-width: 1440px) {
    &[type='range'] {
      width: 368px;
    }
  }
`;

export const PercentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${props => `${props.theme.colors.primaryBlue}`};
    font-size: 12px;
    line-height: 1.3;

    &::before {
      height: 8px;
      display: flex;
      content: '|';
      color: ${props => `${props.theme.colors.secondaryBlue}`};
      justify-content: center;
      align-items: center;
      margin-bottom: 4px;
      margin-top: 4px;
    }
    &:first-child {
      margin-left: 4px;
    }
    &:nth-child(2) {
      position: absolute;
      top: 80%;
      left: 49.5%;
      transform: translate(-50%, -50%);
      font-size: ${props => `${props.theme.fontSizes.text}`};
      font-weight: 500;
      line-height: ${props => `${props.theme.lineHeights.text}`};
    }
  }
`;

export const AddBtn = styled.button`
  width: 100%;
  display: inline-flex;
  padding: 6px 76px;
  justify-content: center;
  align-items: center;
  height: 44px;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background-color: ${props => `${props.theme.colors.primaryBlue}`};
  color: ${props => `${props.theme.colors.primaryWhite}`};
  box-shadow: ${props => `${props.theme.shadows.normalButton}`};
  cursor: pointer;

  svg {
    stroke: ${props => `${props.theme.colors.primaryWhite}`};
    margin: 0;
    border: solid 2px ${props => `${props.theme.colors.primaryWhite}`};
    border-radius: 50%;
  }

  &:hover,
  &:focus {
    color: ${props => `${props.theme.colors.secondaryOrange}`};

    svg {
      stroke: ${props => `${props.theme.colors.secondaryOrange}`};
      margin: 0;
      border: solid 2px ${props => `${props.theme.colors.secondaryOrange}`};
    }
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 10px 104px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
    padding: 10px 30px;
  }
`;
