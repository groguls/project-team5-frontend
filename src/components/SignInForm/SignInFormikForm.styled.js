import { styled } from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 16px;
  max-width: 280px;

  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 384px;
    margin: 0;
  }
`;

export const InputForm = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`;

export const ButtonSubmit = styled.button`
  max-width: 280px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 30px;
  border: none;
  background-color: ${props => `${props.theme.colors.primaryBlue}`};
  color: ${props => `${props.theme.colors.primaryWhite}`};
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 384px;
  }
`;

export const ButtonLink = styled.div`
  max-width: 280px;
  border: none;
  background-color: transparent;
  justify-content: start;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 384px;
  }
`;
