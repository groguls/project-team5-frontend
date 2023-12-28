import Button from 'components/Button';
import styled from 'styled-components';
import { theme } from 'styles/theme';

export const CloseIcon = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  transform: rotate(45deg);
`;

export const ModalWrapper = styled.div`
  background: white;
  position: relative;
  width: 256px;
  height: 208px;
  border-radius: 5px;
  margin-bottom: 24px;
  cursor: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: 768px) {
    width: 544px;
    height: 120px;
    gap: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-self: stretch;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const CancelButton = styled(Button)`
  width: 100%;
  background-color: ${theme.colors.secondaryGray};
  color: ${theme.colors.primaryBlue};

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;

export const LogoutButton = styled(Button)`
  width: 100%;
  background-color: ${theme.colors.secondaryRed};

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;

export const LogoutTitle = styled.b`
  font-weight: 500;
  font-size: 26px;

  color: ${theme.colors.primaryBlack};
`;

export const Question = styled.p`
  font-weight: 500;
  font-size: 18px;

  color: ${theme.colors.primaryBlack};
`;
